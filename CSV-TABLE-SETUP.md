# CSV Changelog Table Setup Guide

## 🚀 Quick Start

Your CSV changelog table is now ready with version support! Here's how to use it:

### 1. **Current Setup**
- ✅ **JavaScript file**: `/static/js/csv-changelog-table.js`
- ✅ **Version support**: Multiple CSV files per release version
- ✅ **Sample data**: Created for all 25.04 versions
- ✅ **Integration**: Added to `SCALEReleaseNotes.md` with version selector

### 2. **Version-Based CSV Files**

The table now supports multiple versions with separate CSV files:

#### **📁 File Structure**
```
/static/data/
├── scale-25.04-changelog.csv        # All 25.04 tickets (default)
├── scale-25.04.1-changelog.csv      # 25.04.1 specific tickets  
├── scale-25.04.0-changelog.csv      # 25.04.0 specific tickets
├── scale-25.04-RC.1-changelog.csv   # RC.1 specific tickets
└── scale-25.04-BETA.1-changelog.csv # BETA.1 specific tickets
```

#### **🎯 Version Selector**
Users can now select:
- **"25.04 (All)"** - Shows all tickets across all versions (default)
- **"25.04.1"** - Shows only 25.04.1 tickets
- **"25.04.0"** - Shows only 25.04.0 tickets  
- **"25.04-RC.1"** - Shows only RC.1 tickets
- **"25.04-BETA.1"** - Shows only BETA.1 tickets

#### **Step A: Export from JIRA by Version**
1. Create separate JIRA filters for each version:
   - Filter for 25.04.1: `fixVersion = "25.04.1"`
   - Filter for 25.04.0: `fixVersion = "25.04.0"`
   - Filter for all 25.04: `fixVersion in ("25.04.1", "25.04.0", "25.04-RC.1", "25.04-BETA.1")`
2. Export each filter as CSV with these columns:
   - `Key`, `Summary`, `Priority`, `Status`, `Fix Version/s`, `Components`, `Description`, `Assignee`, `Created`, `Updated`

#### **Step B: Replace the Sample Files**
1. Save your exports with the correct naming:
   ```bash
   cp /path/to/25.04-all-export.csv "/mnt/c/Users/Anthony Rivera/Documents/GitHub/documentation/static/data/scale-25.04-changelog.csv"
   cp /path/to/25.04.1-export.csv "/mnt/c/Users/Anthony Rivera/Documents/GitHub/documentation/static/data/scale-25.04.1-changelog.csv"
   cp /path/to/25.04.0-export.csv "/mnt/c/Users/Anthony Rivera/Documents/GitHub/documentation/static/data/scale-25.04.0-changelog.csv"
   # ... etc for other versions
   ```

#### **Step C: Update the Script (if needed)**
If your CSV has different column names, update the script in `SCALEReleaseNotes.md`:

```javascript
createCSVChangelogTable('/data/sample-changelog.csv', 'csv-changelog-container', {
    columns: {
        key: 'Issue key',        // If your column is named differently
        summary: 'Title',        // If your column is named differently  
        priority: 'Priority Level', // If your column is named differently
        // ... etc
    }
});
```

## 🎨 **Features**

### **✅ What's Included**
- **TrueNAS-themed styling** - Matches security site header colors (`#0095d5` gradient)
- **Dark/Light mode support** - Automatically adapts to documentation theme
- **Interactive filtering** - Filter by Status, Priority, and search text
- **Sortable columns** - Click headers to sort data
- **Detailed view** - Click rows to see full issue details
- **CSV export** - Export filtered data as new CSV
- **Responsive design** - Works on mobile and desktop
- **Priority/Status colors** - Visual indicators for issue priority and status

### **🎯 Filter Options**
- **Status Filter**: All Statuses, Done, In Progress, To Do, etc.
- **Priority Filter**: All Priorities, High, Medium, Low, etc.  
- **Search Box**: Search across Key, Summary, Components, and Assignee
- **Reset Button**: Clear all filters and return to full view
- **Export Button**: Download current filtered view as CSV

### **🔗 JIRA Integration**
- **Direct links**: Each issue key links to JIRA ticket
- **Standard format**: Works with default JIRA CSV exports
- **Custom mapping**: Support for different column names

## 📝 **Usage Examples**

### **Basic Usage (Default Columns)**
```html
<div id="my-changelog"></div>
<script src="/js/csv-changelog-table.js"></script>
<script>
    createCSVChangelogTable('/data/my-export.csv', 'my-changelog');
</script>
```

### **Custom Column Mapping**
```html
<script>
    createCSVChangelogTable('/data/my-export.csv', 'my-changelog', {
        delimiter: ';',  // Use semicolon instead of comma
        columns: {
            key: 'Ticket ID',
            summary: 'Title',
            priority: 'Priority Level',
            status: 'Current Status',
            fixVersion: 'Target Release',
            components: 'Area',
            assignee: 'Owner'
        }
    });
</script>
```

## 🔄 **Updating Data**

### **Manual Process** (Current)
1. Export new CSV from JIRA filter
2. Replace the file in `/static/data/`
3. Refresh the documentation page

### **Automation Ideas** (Future)
- Set up GitHub Action to fetch JIRA data periodically
- Use JIRA webhooks to trigger updates
- Create a simple script to download and replace CSV

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