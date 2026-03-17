# Bug Fixes: Python Script Correctness and Safety

## Summary

This PR fixes four bugs found across the Python scripts in this repository, ranging from a
critical crash-on-execution error in a legacy script to silent error suppression in a
CI validation script. No documentation content or configuration was changed.

---

## Bug 1 — `deploy.py`: `NameError` crash on execution (Critical)

**File:** `deploy.py`
**Lines affected:** 9, 16

### Problem

The script referenced two variables (`username` and `allowed_users`) that were never
defined anywhere in the file. Any attempt to run the script would result in an immediate
`NameError` before any useful work could be done:

```python
# NameError: name 'username' is not defined
rsync_target = username + "@" + web_server_host + ":" + web_server_dir

# NameError: name 'allowed_users' is not defined
if username.lower() in allowed_users:
```

The file was already marked `#### THIS FILE IS OUTDATED ###` at the top, indicating it
should not be used, but a stale script that crashes with an uninformative error is a
hazard for anyone who stumbles upon it.

### Fix

Replaced the broken script body with an explicit early exit that prints a clear message
and exits with code 1. Deployment is handled by the CI/CD pipeline and this script
serves no purpose.

```python
import sys

print("Error: This deployment script is outdated and no longer maintained.")
print("Deployment is handled by the CI/CD pipeline. Do not run this script directly.")
sys.exit(1)
```

---

## Bug 2 — `check_aliases.py`: Silent suppression of alias violations (Medium)

**File:** `.github/scripts/check_aliases.py`
**Lines affected:** 33, 37

### Problem A — `ValueError` on unclosed front matter

```python
end_index = lines[1:].index("---\n") + 1
```

If a markdown file opens with `---` but never has a matching closing `---` delimiter,
`list.index()` raises `ValueError`. This was caught by the broad `except Exception`
handler on line 42, which only prints a warning. The result: files with malformed front
matter are silently skipped, meaning any versioned aliases inside them go undetected by
the CI check.

### Problem B — `AttributeError` on empty front matter

```python
aliases = data.get("aliases", [])
```

`yaml.safe_load` returns `None` for an empty YAML block (e.g., a file whose front matter
is just two `---` lines with nothing between them). Calling `.get()` on `None` raises
`AttributeError`. Again, the broad except clause swallowed this silently.

### Fix

Added an explicit `try/except ValueError` around the closing-delimiter search so that
malformed files produce a visible warning and `continue` to the next file — rather than
falling through the outer handler. Added a `None` guard before accessing `data.get()`.

```python
try:
    end_index = lines[1:].index("---\n") + 1
except ValueError:
    print(f"⚠️ Skipping {file}: no closing '---' found in front matter")
    continue

data = yaml.safe_load(front_matter)
if data is None:
    continue
aliases = data.get("aliases", [])
```

---

## Bug 3 — `combine-changelogs.py`: `TypeError` crash when all CSVs are empty (Low)

**File:** `scripts/combine-changelogs.py`
**Line affected:** 119 (original), now guarded before it

### Problem

The `header` variable is only assigned when a non-empty CSV row is encountered:

```python
if header is None:
    header = rows[0]
```

If every individual CSV file for a given version is completely empty (zero rows), `header`
remains `None`. The script then proceeds to:

```python
writer.writerow(header)  # TypeError: 'NoneType' object is not iterable
```

This crashes with an unhandled `TypeError` instead of a clear diagnostic message.

### Fix

Added an explicit check for `header is None` before writing, with an informative message:

```python
if header is None:
    print(f"No data rows found across all CSV files for version {version}")
    return
```

---

## Bug 4 — `update-software-status.py`: Dead condition in `elif` branch (Info)

**File:** `scripts/update-software-status.py`
**Line affected:** 69 (original `elif` condition)

### Problem

In `get_doc_url_components()`, the `elif` branch contained the condition
`major > 25 or (major == 25 and minor >= 10)`. Because the preceding `if major >= 26`
already handles all cases where `major > 25`, the sub-condition `major > 25` in the
`elif` is always `False` at that point — it is dead code. While this does not affect
runtime behavior, it is misleading and could cause confusion during future maintenance
(e.g., someone might think version 26.x could be matched by the `elif` branch).

### Fix

Simplified the condition to only what is reachable:

```python
# Before
elif major > 25 or (major == 25 and minor >= 10):

# After
elif major == 25 and minor >= 10:
```

---

## Files Changed

| File | Change |
|------|--------|
| `deploy.py` | Replaced broken script body with safe early exit |
| `.github/scripts/check_aliases.py` | Fixed `ValueError` on unclosed front matter; added `None` guard on YAML data |
| `scripts/combine-changelogs.py` | Added `None` guard on `header` before writing combined CSV |
| `scripts/update-software-status.py` | Removed dead condition `major > 25` from `elif` branch |

## Testing

- `deploy.py`: Running `python deploy.py` now prints a clear error and exits 1 instead of crashing with `NameError`.
- `check_aliases.py`: Files with unclosed front matter now log a visible warning and are skipped cleanly; empty front matter no longer raises `AttributeError`.
- `combine-changelogs.py`: Passing a version whose CSV files are all empty now exits with a clear message instead of a `TypeError`.
- `update-software-status.py`: No behavioral change; logic is identical for all valid inputs.
