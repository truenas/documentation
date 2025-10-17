# CSV Changelog Table Setup Guide

## 🚀 Quick Start

Your CSV changelog table is now ready with version support and automated generation! Here's how to use it:

### 1. **Current Setup**
- ✅ **JavaScript file**: `/static/js/csv-changelog-table.js`
- ✅ **Version configuration**: `/static/data/changelog-versions.json`
- ✅ **Version support**: Multiple CSV files per release version  
- ✅ **Automated generation**: Script to combine individual releases
- ✅ **Integration**: Added to `VersionNotes.md` with version selector

### 2. **Version Configuration**

Versions are now configured in `/static/data/changelog-versions.json`:

```json
{
  "25.04": {
    "label": "25.04 (Fangtooth)", 
    "versions": [
      { "value": "all", "label": "25.04 (All)", "filename": "scale-25.04-changelog.csv" },
      { "value": "25.04.1", "label": "25.04.1", "filename": "scale-25.04.1-changelog.csv" },
      { "value": "25.04.0", "label": "25.04.0", "filename": "scale-25.04.0-changelog.csv" }
    ],
    "defaultVersion": "all"
  },
  "25.10": {
    "label": "25.10 (Goldeye)",
    "versions": [
      { "value": "all", "label": "25.10 (All)", "filename": "25.10-changelog.csv" },
      { "value": "25.10-BETA.1", "label": "25.10-BETA.1", "filename": "25.10-BETA.1-changelog.csv" }
    ],
    "defaultVersion": "all"
  }
}
```

#### **📁 File Structure**
```
/static/data/
├── changelog-versions.json          # Version configuration
├── scale-25.04-changelog.csv        # All 25.04 tickets (generated)
├── scale-25.04.1-changelog.csv      # 25.04.1 specific tickets  
├── scale-25.04.0-changelog.csv      # 25.04.0 specific tickets
├── 25.10-changelog.csv              # All 25.10 tickets (generated)  
└── 25.10-BETA.1-changelog.csv     # 25.10-BETA.1 specific tickets
```

#### **🎯 Version Selector**
Users can now select:
- **"25.04 (All)"** - Shows all tickets across all versions (default)
- **"25.04.1"** - Shows only 25.04.1 tickets
- **"25.04.0"** - Shows only 25.04.0 tickets  
- **"25.04-RC.1"** - Shows only RC.1 tickets
- **"25.04-BETA.1"** - Shows only BETA.1 tickets

### 3. **Adding New Versions/Releases**

#### **Step A: Export Individual Releases from JIRA**
1. Create separate JIRA filters for each individual release:
   - Filter for 25.10.0: `fixVersion = "SCALE-25.10.0 (Goldeye)"`
   - Filter for 25.10.1: `fixVersion = "SCALE-25.10.1 (Goldeye)"`
2. Export each filter as CSV with these columns:
   - `Issue key`, `Issue id`, `Summary`, `Fix versions` (multiple), `Status`, `Priority`, `Affects versions` (multiple), `Created`, `Updated`
3. Save individual release files in `/static/data/`

#### **Step B: Update Version Configuration**
Add new versions to `/static/data/changelog-versions.json`:
```json
{
  "25.10": {
    "versions": [
      { "value": "all", "label": "25.10 (All)", "filename": "25.10-changelog.csv" },
      { "value": "25.10.1", "label": "25.10.1", "filename": "25.10.1-changelog.csv" },
      { "value": "25.10.0", "label": "25.10.0", "filename": "25.10.0-changelog.csv" }
    ]
  }
}
```

#### **Step C: Generate Combined "All" File**
Run the automated script to combine individual releases:
```powershell
# From the documentation repository root
python scripts/combine-changelogs.py 25.10
```

This will automatically:
- Find all individual release files for version 25.10
- Combine them into the "All" file (`25.10-changelog.csv`)
- Remove duplicates and sort by issue key
- Show progress and statistics

#### **Step D: Update Documentation Pages**
Update your release notes page to use the new version:
```javascript
// In your release notes page (e.g., VersionNotes.md)
initializeChangelogTableForTabs('25.10');  // Matches the key in changelog-versions.json
```

This function will automatically load the version configuration and set up the changelog table with the appropriate tabs and version selector.

## 🎨 **Features**

### **✅ What's Included**
- **TrueNAS-themed styling** - Matches security site header colors (`#0095d5` gradient)
- **Dark/Light mode support** - Automatically adapts to documentation theme
- **Version selector** - Switch between individual releases and "All" view
- **Interactive filtering** - Filter by Priority and search text
- **Sortable columns** - Click headers to sort data (Key, Summary, Priority, Status, Fix Versions)
- **Detailed view** - Click rows to see full issue details with Affects Versions
- **Responsive design** - Works on mobile and desktop
- **Priority/Status colors** - Visual indicators for issue priority and status
- **JIRA integration** - Direct links to JIRA tickets from issue keys
- **Multiple fix versions** - Handles CSV files with multiple "Fix versions" columns
- **Automated combination** - Script to generate "All" files from individual releases

### **🎯 Filter Options**
- **Version Selector**: Choose individual releases or "All" combined view
- **Priority Filter**: All Priorities, High, Medium, Low, etc.  
- **Search Box**: Search across Key, Summary text
- **Reset Button**: Clear all filters and return to full view

### **🔗 JIRA Integration**
- **Direct links**: Each issue key links to JIRA ticket
- **Standard format**: Works with default JIRA CSV exports
- **Custom mapping**: Support for different column names

## 📝 **Usage Examples**

### **Version-Based Usage (Current Setup)**
```html
<div id="changelog-container"></div>
<script src="/static/js/csv-changelog-table.js"></script>
<script>
    createCSVChangelogTable('/static/data/', 'changelog-container', {
        useVersioning: true,
        versionKey: '25.10',  // Load version config from changelog-versions.json
        delimiter: ','
    });
</script>
```

### **Single CSV File (Simple)**
```html
<div id="my-changelog"></div>
<script src="/static/js/csv-changelog-table.js"></script>
<script>
    createCSVChangelogTable('/static/data/single-file.csv', 'my-changelog');
</script>
```

### **Custom Column Mapping**
```html
<script>
    // Only needed if your CSV has different column names than JIRA standard
    createCSVChangelogTable('/static/data/my-export.csv', 'my-changelog', {
        columns: {
            key: 'Ticket ID',           // Instead of 'Issue key'
            summary: 'Title',           // Instead of 'Summary'
            priority: 'Priority Level', // Instead of 'Priority'
            status: 'Current Status',   // Instead of 'Status'
            fixVersion: 'Target Release' // Instead of 'Fix versions'
        }
    });
</script>
```

## 🔄 **Updating Data**

### **Recommended Process**
1. **Export individual releases** from JIRA as CSV files
2. **Save files** to `/static/data/` with correct naming
3. **Update** `/static/data/changelog-versions.json` if adding new versions
4. **Run combination script**: `python scripts/combine-changelogs.py 25.10`
5. **Refresh** the documentation page

### **Script Benefits**
- ✅ **Automated deduplication** - Removes duplicate issues across releases  
- ✅ **Consistent sorting** - Orders by issue key for predictable results
- ✅ **Progress tracking** - Shows which files are processed and statistics
- ✅ **Error handling** - Reports missing files or configuration issues

### **Manual Alternative** (Not recommended)
1. Export "All" CSV directly from JIRA with complex filter
2. Replace the combined file manually
3. Risk of missing issues or inconsistent data

## 🎨 **Customization**

The table automatically inherits the documentation site's theme colors via CSS variables:
- `--body-background` - Table background
- `--body-font-color` - Text color  
- `--accent-color` - Borders and alternating rows
- `--link-color` - Link colors

All styling is self-contained in the JavaScript file, so no CSS modifications are needed.

## 🐛 **Troubleshooting**

### **CSV Not Loading**
- Check the file path is correct
- Ensure the CSV file exists in `/static/data/`
- Check browser console for error messages

### **Columns Not Appearing**
- Verify your CSV has the expected column headers
- Check the column mapping configuration
- Ensure CSV is properly formatted (quotes, commas, etc.)

### **Filtering Not Working**
- Check that Status/Priority columns have consistent values
- Verify there are no extra spaces or special characters

---

## 🎯 **Next Steps**

1. **Replace sample data** with your actual JIRA export
2. **Test the functionality** in your documentation site
3. **Set up regular updates** (manual or automated)
4. **Customize** column mappings if needed

The table is now ready to display your JIRA tickets with the same professional styling as the TrueNAS security site!
