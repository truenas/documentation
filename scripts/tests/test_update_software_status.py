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
