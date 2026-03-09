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
