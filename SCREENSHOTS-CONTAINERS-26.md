# TrueNAS 26 Containers Documentation - Screenshot Tracking

**Documentation Update**: Containers redesign (libvirt backend)
**Date Created**: 2026-02-03
**Files Updated**: ContainersScreens.md, Containers/_index.md

---

## 🔴 CRITICAL PRIORITY - Required Updates

### 1. Create Container Wizard Screenshots
**Status**: [ ] Not Started | [ ] In Progress | [ ] Complete

**Issue**: Documentation removed Network/USB/GPU from wizard (configured post-creation only)

**Action Required**:
- [ ] Remove or replace screenshots showing Network settings in wizard
- [ ] Remove or replace screenshots showing USB devices in wizard
- [ ] Remove or replace screenshots showing GPU devices in wizard
- [ ] Verify wizard shows ONLY: Name, Image, CPU, Memory, Environment, Disks

**Files to Update**:
- [ ] `CreateInstanceGPU.png` - DELETE from wizard section
- [ ] `CreateInstanceUSB.png` - DELETE from wizard section
- [ ] `InstancesNetworkDefault.png` - Move to post-creation context or note removal
- [ ] `InstancesNetworkNonDefault.png` - Move to post-creation context or note removal

**Documentation References**:
- ContainersScreens.md: Line 145-200 (Create Container Wizard section)
- Containers/_index.md: Line 268-357 (Creating a Container procedure)

---

### 2. Filesystem Devices Widget
**Status**: [ ] Not Started | [ ] In Progress | [ ] Complete

**Issue**: NEW widget documented but no screenshot exists

**Action Required**:
- [ ] CREATE new screenshot of Filesystem Devices Widget
- [ ] Show Source and Destination fields
- [ ] Show Add/Edit/Delete actions
- [ ] Example with mounted dataset or directory

**New Screenshot Filename**: `FilesystemDevicesWidget.png`

**Where to Capture**:
- Navigate to: Containers > Select a container > Filesystem Devices Widget
- Show: Source (host path), Destination (container path), actions menu

**Documentation References**:
- ContainersScreens.md: Line ~273-291 (Filesystem Devices Widget section)
- Containers/_index.md: Line ~610-640 (Configuring Filesystem Devices section)

---

### 3. USB Devices Widget (Separate)
**Status**: [ ] Not Started | [ ] In Progress | [ ] Complete

**Issue**: Widget split from combined "Devices Widget" - needs separate screenshot

**Action Required**:
- [ ] CREATE screenshot showing USB Devices Widget separately
- [ ] Should show ONLY USB devices in list
- [ ] NO TPM or PCI Passthrough options visible (containers don't support these)

**New Screenshot Filename**: `USBDevicesWidget.png`

**Current (outdated)**: `DevicesWidget.png` shows USB/GPU/TPM/PCI combined

**Where to Capture**:
- Navigate to: Containers > Select a container > USB Devices Widget
- Show: USB device list with Add button

**Documentation References**:
- ContainersScreens.md: Line ~235-240 (USB Devices Widget section)
- Containers/_index.md: Line ~547-560 (Managing USB Devices section)

---

### 4. GPU Devices Widget (Separate)
**Status**: [ ] Not Started | [ ] In Progress | [ ] Complete

**Issue**: Widget split from combined "Devices Widget" - needs separate screenshot

**Action Required**:
- [ ] CREATE screenshot showing GPU Devices Widget separately
- [ ] Ideally show multiple GPU vendors if available (NVIDIA/Intel/AMD)
- [ ] Show driver prerequisite messaging if applicable

**New Screenshot Filename**: `GPUDevicesWidget.png`

**Where to Capture**:
- Navigate to: Containers > Select a container > GPU Devices Widget
- Show: GPU device list with vendor info and Add button

**Documentation References**:
- ContainersScreens.md: Line ~242-266 (GPU Devices Widget section)
- Containers/_index.md: Line ~562-595 (Managing GPU Devices section)

---

## 🟡 MEDIUM PRIORITY - Verify or Update

### 5. Container Details Widgets Overview
**Status**: [ ] Not Started | [ ] In Progress | [ ] Complete

**Issue**: Multiple widgets removed/changed - verify composite screenshots

**Action Required**:
- [ ] Verify container details screen shows correct widget set
- [ ] Confirm NO Idmap Widget visible
- [ ] Confirm NO Metrics Widget visible
- [ ] Confirm NO TPM/PCI Passthrough in Devices Widget for containers

**Widgets That Should Appear**:
- ✅ General Info Widget
- ✅ USB Devices Widget (separate)
- ✅ GPU Devices Widget (separate)
- ✅ Filesystem Devices Widget
- ✅ Disks Widget
- ✅ NIC Widget
- ✅ Tools Widget

**Widgets That Should NOT Appear**:
- ❌ Idmap Widget (removed from code)
- ❌ Metrics Widget (removed from code)
- ❌ Devices Widget showing TPM/PCI (VM-only)

**Screenshot to Review**: Any full-screen container details views

---

### 6. NVIDIA Drivers in System > Advanced Settings
**Status**: [ ] Not Started | [ ] In Progress | [ ] Complete

**Issue**: Verify existing screenshots are current (location changed from Apps to System)

**Action Required**:
- [ ] Verify `AdvancedSettingsNVIDIADriversWidget.png` is current
- [ ] Verify `NVIDIADriversConfigScreen.png` is current
- [ ] Confirm shows Install NVIDIA Drivers checkbox
- [ ] Confirm shows Debug Kernel warning/interaction

**Screenshot Filenames**:
- `AdvancedSettingsNVIDIADriversWidget.png`
- `NVIDIADriversConfigScreen.png`

**Where to Find**:
- Navigate to: System > Advanced Settings > NVIDIA Drivers Widget
- Widget should show installation status
- Configure should open screen with Install checkbox

**Documentation References**:
- AdvancedSettingsScreen.md: Line 462-496 (NVIDIA Drivers Widget section)

---

### 7. Container Logs with Auto-Scroll
**Status**: [ ] Not Started | [ ] In Progress | [ ] Complete

**Issue**: Auto-scroll checkbox documented but may not have screenshot

**Action Required**:
- [ ] Verify if existing screenshots show auto-scroll checkbox
- [ ] CREATE new screenshot if auto-scroll not visible in current images
- [ ] Show log output with auto-scroll checkbox clearly visible

**Potential Screenshot Filename**: `ContainerLogsAutoScroll.png`

**Where to Capture**:
- Navigate to: Containers > Select a container > Tools Widget > Logs button
- Show: Log viewer with auto-scroll checkbox

**Documentation References**:
- ContainersScreens.md: Line 400-402 (Logs section in Tools Widget)

---

### 8. Edit Container Configuration - Autostart
**Status**: [ ] Not Started | [ ] In Progress | [ ] Complete

**Action Required**:
- [ ] Verify `EditInstanceConfiguration.png` shows Autostart toggle
- [ ] Screenshot should be current and clear

**Screenshot Filename**: `EditInstanceConfiguration.png`

**Documentation References**:
- ContainersScreens.md: Line 415-431 (Edit Container Configuration Settings)
- Containers/_index.md: Line 397-421 (Editing Container Configuration Settings)

---

## 🟢 LOW PRIORITY - Verify Only

### 9. Global Settings Screen
**Status**: [ ] Not Started | [ ] In Progress | [ ] Complete

**Action**: Verify `InstancesGlobalSettingsScreen.png` is current

**Documentation References**:
- ContainersScreens.md: Line 44-66
- Containers/_index.md: Line 44-85

---

### 10. NIC Widget
**Status**: [ ] Not Started | [ ] In Progress | [ ] Complete

**Action**: Verify `NICWidget.png` is current

**Documentation References**:
- ContainersScreens.md: Line 354-372
- Containers/_index.md: Line 610-627

---

### 11. Disks Widget and Add Disk Screen
**Status**: [ ] Not Started | [ ] In Progress | [ ] Complete

**Action**: Verify these screenshots are current:
- [ ] `DisksWidget.png`
- [ ] `AddDiskScreen.png`
- [ ] `DeleteDiskDialog.png`

**Documentation References**:
- ContainersScreens.md: Line 324-391
- Containers/_index.md: Line 567-607

---

### 12. Tools Widget
**Status**: [ ] Not Started | [ ] In Progress | [ ] Complete

**Action**: Verify `ToolsWidget.png` is current

**Documentation References**:
- ContainersScreens.md: Line 374-402
- Containers/_index.md: Line 629-637

---

## 📋 DELETION CHECKLIST

**Screenshots to DELETE from documentation** (if they exist):

- [ ] Any screenshot showing **Idmap Widget** for containers (doesn't exist in code)
- [ ] Any screenshot showing **Metrics Widget** for containers (doesn't exist in code)
- [ ] Any screenshot showing **TPM devices** listed for containers (VM-only feature)
- [ ] Any screenshot showing **PCI Passthrough devices** listed for containers (VM-only feature)
- [ ] `AddPCIPassthroughDevice.png` in containers context (VM-only feature)

**Note**: These features don't exist in the container implementation according to code audit.

---

## 📂 Screenshot File Locations

**Path Structure**:
```
/documentation/static/images/SCALE/
├── Virtualization/          # Most container screenshots
│   ├── InstancesScreenNoInstances.png
│   ├── CreateInstance*.png
│   ├── *Widget.png
│   └── ...
└── SystemSettings/          # NVIDIA driver screenshots
    ├── AdvancedSettingsNVIDIADriversWidget.png
    └── NVIDIADriversConfigScreen.png
```

---

## 🎯 Work Priority Order

1. **CRITICAL** - Update Create Container Wizard screenshots (architectural change)
2. **CRITICAL** - Create Filesystem Devices Widget screenshot (new feature)
3. **CRITICAL** - Create separate USB/GPU widget screenshots (widget split)
4. **MEDIUM** - Verify NVIDIA drivers screenshots in System > Advanced Settings
5. **MEDIUM** - Create/verify Container Logs with auto-scroll
6. **LOW** - Verify remaining screenshots for currency
7. **FINAL** - Delete any screenshots showing removed widgets (Idmap, Metrics, TPM, PCI)

---

## 📝 Notes for Screenshot Creation

**Resolution/Quality**:
- Use consistent UI zoom level across all screenshots
- Ensure text is readable
- Capture full widget/screen as documented

**Test System**:
- TrueNAS 26.04 or later
- Container service enabled
- At least one container created for widget screenshots

**Special Considerations**:
- GPU screenshots: May need system with GPU hardware to show device list
- NVIDIA drivers: May need compatible GPU to show driver installation option
- USB devices: May need USB device connected to show in list

---

## ✅ Completion Checklist

**Phase 1 - Critical Updates**:
- [ ] All wizard screenshots updated (Network/USB/GPU removed from wizard)
- [ ] Filesystem Devices Widget screenshot created
- [ ] USB Devices Widget screenshot created (separate)
- [ ] GPU Devices Widget screenshot created (separate)

**Phase 2 - Verification**:
- [ ] NVIDIA drivers screenshots verified/updated
- [ ] Container logs auto-scroll screenshot verified/created
- [ ] Edit configuration screenshots verified
- [ ] All widget overview screenshots verified

**Phase 3 - Cleanup**:
- [ ] Removed/replaced screenshots of non-existent widgets
- [ ] Documentation image references all updated
- [ ] All screenshot paths verified in markdown files

---

**Last Updated**: 2026-02-03
**Updated By**: Documentation team
**Review Status**: Pending screenshot updates
