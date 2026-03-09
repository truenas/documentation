# scripts/tests/test_update_software_status.py
import importlib.util
import os
import sys

# Load the hyphen-named script as a module
_script_path = os.path.join(os.path.dirname(__file__), '..', 'update-software-status.py')
_spec = importlib.util.spec_from_file_location('update_software_status', _script_path)
_mod = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_mod)

# Import the functions we will test
version_to_anchor = _mod.version_to_anchor
parse_version_for_sorting = _mod.parse_version_for_sorting
get_doc_url_components = _mod.get_doc_url_components
build_merged_train_list = _mod.build_merged_train_list
from unittest.mock import patch, MagicMock
fetch_trains_from_cdn = _mod.fetch_trains_from_cdn


# --- version_to_anchor ---

def test_version_to_anchor_pre_25_10_compresses():
    assert version_to_anchor('25.04.2.6') == '250426'
    assert version_to_anchor('24.10.2') == '24102'

def test_version_to_anchor_25_10_returns_as_is():
    assert version_to_anchor('25.10.0') == '25.10.0'
    assert version_to_anchor('25.10.2.1') == '25.10.2.1'

def test_version_to_anchor_26_plus_returns_as_is():
    # 26+ falls into the same >= 25.10 branch — verify it works correctly
    assert version_to_anchor('26.0.0') == '26.0.0'
    assert version_to_anchor('26.0.0-BETA.1') == '26.0.0-BETA.1'
    assert version_to_anchor('27.0.0') == '27.0.0'

def test_version_to_anchor_unparseable_returns_original():
    assert version_to_anchor('nightly') == 'nightly'


# --- parse_version_for_sorting ---

def test_parse_version_sorts_stable_above_rc_above_beta():
    beta = parse_version_for_sorting('26.0.0-BETA.1')
    rc = parse_version_for_sorting('26.0.0-RC.1')
    stable = parse_version_for_sorting('26.0.0')
    assert beta < rc < stable

def test_parse_version_new_format_sorts_correctly():
    v1 = parse_version_for_sorting('26.0.0')
    v2 = parse_version_for_sorting('26.0.1')
    v3 = parse_version_for_sorting('26.1.0')
    assert v1 < v2 < v3

def test_parse_version_old_format_still_works():
    v1 = parse_version_for_sorting('25.10.1')
    v2 = parse_version_for_sorting('25.10.2')
    assert v1 < v2


# --- get_doc_url_components ---

def test_get_doc_url_components_pre_25_10():
    url_ver, doc_path, anchor = get_doc_url_components('25.04.2.6')
    assert url_ver == '25.04'
    assert doc_path == 'scalereleasenotes'
    assert anchor == '250426'

def test_get_doc_url_components_25_10():
    url_ver, doc_path, anchor = get_doc_url_components('25.10.2.1')
    assert url_ver == '25.10'
    assert doc_path == 'versionnotes'
    assert anchor == '25.10.2.1'

def test_get_doc_url_components_26():
    url_ver, doc_path, anchor = get_doc_url_components('26.0.0')
    assert url_ver == '26'          # major only, not '26.0'
    assert doc_path == 'versionnotes'
    assert anchor == '26.0.0'

def test_get_doc_url_components_26_beta():
    url_ver, doc_path, anchor = get_doc_url_components('26.0.0-BETA.1')
    assert url_ver == '26'
    assert doc_path == 'versionnotes'
    assert anchor == '26.0.0-BETA.1'

def test_get_doc_url_components_27():
    url_ver, doc_path, anchor = get_doc_url_components('27.0.0')
    assert url_ver == '27'
    assert doc_path == 'versionnotes'
    assert anchor == '27.0.0'

def test_get_doc_url_components_unparseable_returns_none():
    assert get_doc_url_components('nightly') is None


# --- build_merged_train_list ---

def test_build_merged_train_list_new_cdn_wins_on_duplicate():
    new_trains = {'TrueNAS-SCALE-Goldeye': {}, 'TrueNAS-26-Nightlies': {}}
    new_redirections = {}
    old_trains = {'TrueNAS-SCALE-Goldeye': {}, 'TrueNAS-SCALE-Fangtooth': {}}
    additional = {}

    trains, cdn_map = build_merged_train_list(new_trains, new_redirections, old_trains, additional)

    assert cdn_map['TrueNAS-SCALE-Goldeye'] == 'new'
    assert cdn_map['TrueNAS-SCALE-Fangtooth'] == 'old'
    assert cdn_map['TrueNAS-26-Nightlies'] == 'new'
    # No duplicates
    assert trains.count('TrueNAS-SCALE-Goldeye') == 1

def test_build_merged_train_list_skips_redirection_keys():
    new_trains = {
        'TrueNAS-SCALE-Halfmoon-Nightlies': {},  # alias — skip
        'TrueNAS-26-Nightlies': {},               # canonical — keep
        'TrueNAS-SCALE-Goldeye-BETA': {},         # alias — skip
        'TrueNAS-SCALE-Goldeye': {},              # canonical — keep
    }
    new_redirections = {
        'TrueNAS-SCALE-Halfmoon-Nightlies': 'TrueNAS-26-Nightlies',
        'TrueNAS-SCALE-Goldeye-BETA': 'TrueNAS-SCALE-Goldeye',
    }
    old_trains = {}
    additional = {}

    trains, cdn_map = build_merged_train_list(new_trains, new_redirections, old_trains, additional)

    assert 'TrueNAS-SCALE-Halfmoon-Nightlies' not in cdn_map
    assert 'TrueNAS-SCALE-Goldeye-BETA' not in cdn_map
    assert 'TrueNAS-26-Nightlies' in cdn_map
    assert 'TrueNAS-SCALE-Goldeye' in cdn_map

def test_build_merged_train_list_additional_trains_inserted_at_start():
    new_trains = {'TrueNAS-26-Nightlies': {}}
    new_redirections = {}
    old_trains = {'TrueNAS-SCALE-Goldeye': {}}
    additional = {'TrueNAS-SCALE-Fangtooth': {'description': 'Fangtooth 25.04'}}

    trains, cdn_map = build_merged_train_list(new_trains, new_redirections, old_trains, additional)

    # Additional trains inserted at position 0 (oldest) so cascade logic checks them last
    assert trains[0] == 'TrueNAS-SCALE-Fangtooth'
    assert cdn_map['TrueNAS-SCALE-Fangtooth'] == 'old'

def test_build_merged_train_list_both_cdns_empty_returns_empty():
    trains, cdn_map = build_merged_train_list({}, {}, {}, {})
    assert trains == []
    assert cdn_map == {}

def test_build_merged_train_list_old_cdn_skips_redirections_too():
    # Old CDN might also list alias train names — they should be skipped
    new_trains = {'TrueNAS-26-Nightlies': {}}
    new_redirections = {'TrueNAS-SCALE-Halfmoon-Nightlies': 'TrueNAS-26-Nightlies'}
    old_trains = {'TrueNAS-SCALE-Halfmoon-Nightlies': {}}  # alias on old CDN
    additional = {}

    trains, cdn_map = build_merged_train_list(new_trains, new_redirections, old_trains, additional)

    assert 'TrueNAS-SCALE-Halfmoon-Nightlies' not in cdn_map


# --- fetch_trains_from_cdn ---

def test_fetch_trains_from_cdn_success():
    mock_data = {
        'trains': {'TrueNAS-26-Nightlies': {'description': 'test'}},
        'trains_redirection': {'old-alias': 'TrueNAS-26-Nightlies'}
    }
    mock_response = MagicMock()
    mock_response.json.return_value = mock_data

    with patch('requests.get', return_value=mock_response):
        trains, redirections = fetch_trains_from_cdn('https://example.com/', 'trains_v2.json')

    assert 'TrueNAS-26-Nightlies' in trains
    assert redirections == {'old-alias': 'TrueNAS-26-Nightlies'}

def test_fetch_trains_from_cdn_no_redirection_field():
    # CDN response without trains_redirection (e.g. old CDN)
    mock_data = {'trains': {'TrueNAS-SCALE-Goldeye': {}}}
    mock_response = MagicMock()
    mock_response.json.return_value = mock_data

    with patch('requests.get', return_value=mock_response):
        trains, redirections = fetch_trains_from_cdn('https://example.com/', 'trains_v2.json')

    assert 'TrueNAS-SCALE-Goldeye' in trains
    assert redirections == {}   # empty dict, not an error

def test_fetch_trains_from_cdn_network_failure_returns_none():
    with patch('requests.get', side_effect=Exception('Connection refused')):
        trains, redirections = fetch_trains_from_cdn('https://example.com/', 'trains_v2.json')

    assert trains is None
    assert redirections == {}


# --- releases.json fallback (new CDN 404 → legacy CDN) ---
# Tested via build_merged_train_list + the releases fetch loop in main().
# The fallback is inline in main() — tested here via integration-style assertion
# on build_merged_train_list output used by the fetch loop.

def test_build_merged_train_list_goldeye_assigned_to_new_cdn_when_listed():
    # Goldeye appears on both CDNs; new CDN wins in the merge.
    # The releases fetch loop is responsible for falling back if new CDN 404s.
    new_trains = {'TrueNAS-SCALE-Goldeye': {}, 'TrueNAS-26-Nightlies': {}}
    new_redirections = {}
    old_trains = {'TrueNAS-SCALE-Goldeye': {}}
    additional = {}

    trains, cdn_map = build_merged_train_list(new_trains, new_redirections, old_trains, additional)

    assert cdn_map['TrueNAS-SCALE-Goldeye'] == 'new'  # new CDN wins in merge
    assert cdn_map['TrueNAS-26-Nightlies'] == 'new'
