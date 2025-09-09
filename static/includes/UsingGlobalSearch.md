&NewLine;

## Searching UI Fields

Click the **Search UI** bar or type <kbd>Ctrl + /</kbd> to select the UI global search.

{{< trueimage src="/images/SCALE/Dashboard/GlobalSearchSelected.png" alt="Search UI Bar" id="Search UI Bar" >}}

### Entering a Query

Enter a keyword to search for elements within the TrueNAS UI.
For example, enter *SMB* to search for results relating to SMB shares and the SMB service.

{{< trueimage src="/images/SCALE/Dashboard/GlobalSearchQuery.png" alt="UI Global Search Query" id="UI Global Search Query" >}}

Global search returns UI screens, widgets, and button names matching the entered query.
Click **View More** to view additional results, if needed.

### Navigating Results

Select a screen result under **UI** to go to the matching screen within the TrueNAS UI.
For example, select **Shares <i class="material-icons" aria-hidden="true" title="Arrow Right">arrow_right_alt</i> SMB** to go to the [**SMB**]({{< ref "SMBSharesScreens" >}}) screen.

{{< trueimage src="/images/SCALE/Dashboard/GlobalSearchResult.png" alt="Global Search Result - Screen" id="Global Search Result - Screen" >}}

Select a widget or button result to go to the screen containing the element.
For example, select **Shares <i class="material-icons" aria-hidden="true" title="Arrow Right">arrow_right_alt</i> SMB <i class="material-icons" aria-hidden="true" title="Arrow Right">arrow_right_alt</i> Add SMB Share** to locate to the **Add** button on the **SMB** screen.

{{< trueimage src="/images/SCALE/Dashboard/GlobalSearchElementResult.png" alt="Global Search Result - Element" id="Global Search Result - Element" >}}

TrueNAS indicates the selected element with a glow effect.

## Searching TrueNAS Documentation

Click **Search Documentation for <<*query*>>** to redirect the search to the TrueNAS Documentation Hub.
TrueNAS opens a new browser tab to display documentation search results for the query.

<!-- Update  image with results from the 24.10 branch, after branching for 24.10 has been completed and the redirect is updated away from master/nightlies-->
{{< trueimage src="/images/SCALE/Dashboard/GlobalSearchDocs.png" alt="Search Documentation Results" id="Search Documentation Results" style="border:1px solid #0095d5" >}}

Use this option to search for tutorials and UI reference documentation for the feature, or to look for further information when the entered search term does not find any matching UI elements.
