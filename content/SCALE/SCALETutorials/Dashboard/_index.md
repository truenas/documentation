---
title: Dashboard
description: "Tutorials related to using the TrueNAS SCALE Dashboard. Includes instructions on customizing the Dashboard widgets."
geekdocCollapseSection: true
weight: 4
tags:
- dashboard
related: true
---

This section contains tutorials for the [main Dashboard]({{< relref "SCALEDashboard.md" >}}).

## Customizing the Dashboard
You can customize the main **Dashboard** by moving, adding, or deleting widgets.

Click **Configure** to put the **Dashboard** into configuration mode.

While in configuration mode all widgets show as widget groups that are surronded by dotted line borders.
Each widget group includes a drag handle, and the edit and delete icon buttons.

{{< trueimage src="/images/SCALE/Dashboard/DashboardInConfigMode.png" alt="Dashboard Configuration Mode" id="Dashboard Configuration Mode" >}}

### Moving a Widget
To move a widget to a new position on the **Dashboard** screen, click **Configure** to put the screen into configuration mode.

Locate the widget you want to reposition.

Click on and hold the drag handle at the top center of the widget group, then drag the widget to the desired position on the screen.

After moving widgets, click **Save** at the top right of the screen to exit configuration mode and show widgets in the new positions.

### Adding or Editing a Widget
You can add new widgets to the dashboard or change existing widgets to a new layout, category, or type.

1. Click **Configure** at the top right of the screen to put the screen into configuration mode.
   
   If adding a new widget, click **Add** to open the **Widget Editor**.

   {{< trueimage src="/images/SCALE/Dashboard/WidgetEditorAddNew.png" alt="Widget Editor for New Widget" id="Widget Editor for New Widget" >}}

   If changing an existing widget, locate the widget group on the screen, then click **Edit** at the top right of that widget group to open the **Widget Editor** with the layout and settings for that widget group.

   {{< trueimage src="/images/SCALE/Dashboard/WidgetEditorExistingWidget.png" alt="Widget Editor for Existing Widget" id="Widget Editor for Existing Widget" >}}

2. Click on the layout image you want to use. The image on the screen show the new widget layout.
   
   If adding a new widget, the default layout is full size with the category and type set to **Empty**.

   If editing an existing widget, the current layout changes to show the existing category and type in the first widget of the new layout.
   An error shows in the selected widget of the group if the widget size does not support the selected category and type.

3. Select the widget in the group you want to add or change.
   If the layout includes half and/or quarter size widgets, the first widget in the group is selected by default.

   To configure another widget in the layout, select the position in the group you want to configure.

4. Select the **Widget Category** and **Widget Type** to apply to the selected widget.
   For example, if configuring a network widget, you can use one full size layout or select one with half and quarter size widgets.
   The example below shows two layout options for configuring a network widget.

   {{< trueimage src="/images/SCALE/Dashboard/DashboardNetworkWidgetGroupOptions.png" alt="Widget Group Options for Network" id="Widget Group Options for Network" >}}

   If the selected category is not supported for the selected widget, either select a new layout or change the **Widget Category** and/or **Widget Type** to one the widget supports.

5. (Optional) Edit the next widget in the widget group for the selected layout.
   After adding or changing the widget category and type, either click on the next widget in the group to configure it.
   
6. Click **Save** to close the **Widget Editor** and return to the **Dashboard**. 
   
   Edit or add as many widgets as you want.

7. Click **Save** at the top right of the **Dashboard** screen to save all changes and exit configuration mode.
   To exit configuration mode without saving changes, click **Cancel**.

### Deleting a Widget
To delete a widget from the **Dashboard** screen, click **Configure** to put the screen into configuration mode.

Click the **Delete** icon in the widget group to delete the widget and remove it from the screen.

Click **Save** at the top right of the screen. The screen exits configuration mode and the **Dashboard** no longer shows the widget.
