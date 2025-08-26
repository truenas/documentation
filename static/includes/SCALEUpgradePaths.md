&NewLine;

<style>
/* Custom CSS to override Mermaid background color */
#scale-upgrade-paths .mermaid {
    background-color: inherit;
}

.scroll-container {
    overflow-x: auto; /* Enable horizontal scroll */
    white-space: nowrap; /* Prevent wrapping of content */
    width: 100%; /* Make the container full width */
    cursor: grab; /* Change cursor to indicate draggable area */
    user-select: none; /* Prevent text selection */
}

.scroll-container:active {
    cursor: grabbing; /* Change cursor when dragging */
}

/* Target the scrollbars within .scroll-container */
.scroll-container::-webkit-scrollbar {
  height: .4em;
}

.scroll-container::-webkit-scrollbar-track {
  background: var(--body-background); /* Use your CSS variable */
}

.scroll-container::-webkit-scrollbar-thumb {
  background: #0095d5;
}

.scroll-container::-webkit-scrollbar-thumb:hover {
  background: #0071a2;
}

.chart-wrapper {
    display: inline-block; /* Make the chart inline to work with white-space */
    min-width: 1400px; /* Adjust width to your desired chart size */
}
</style>

The chart below shows recommended paths for upgrading from earlier TrueNAS versions.

Update the system to the latest maintenance release of the installed major version before attempting to upgrade to a new major version.

Permitted upgrade methods are:
* **update**: apply an automatic update using the **Update** screen in the TrueNAS UI or install a manual update file. Some upgrade paths do not support these options (see chart).
* **ISO install**: save a current TrueNAS configuration file, perform a fresh install using an <file>.iso</file> file for the target version, and then upload the previously saved configuration.

Users can skip major versions with a fresh ISO install followed by a configuration file upload.
Carefully review release notes for each skipped major version before upgrading, noting any service deprecations or significant changes that impact the previous configuration.
Consider stopping at major versions with significant impacts to address changes before continuing the upgrade path or be prepared to manually reconfigure incompatibilities on the latest target version.

{{< hint type=note >}}
This chart shows the basic update path to and from the latest release of each TrueNAS major version.
Depending on your use case and risk tolerance, some users may prefer to remain on an earlier minor or major version for a period of time before updating.
Visit the <a href="https://www.truenas.com/software-status/" target="_blank">TrueNAS Software Status</a> page for recommendations on which software version to use, tailored to user types ranging from Developer to Mission Critical.
{{< /hint >}}

<div class="section-box" id="scale-upgrade-paths" style="padding: 0 40px 40px 40px; margin-bottom: 20px;">
    <div class="upgrade-paths-container">
      <img src="/images/TrueNAS_Community_Edition.png" style="box-shadow: none; max-width: 225px; padding-bottom: 20px; padding-top: 40px;" title="TrueNAS Community Edition" alt="TrueNAS Community Edition">
      <div class="scroll-container" id="scrollContainer1">
        <div class="chart-wrapper">
          {{< mermaid class="mermaid_sizing" >}}
          flowchart LR
            A["11.3-U5"] -->|update| B["12.0-U8.1"]
            B -->|"update<br><br>ISO install"| C["13.0-U6.8<br><br>13.3-U2"]
            C -->|update| G
            C -->|ISO install| I
            D["22.02.4 (Angelfish)"] -->|update| E
            E["22.12.4.2 (Bluefin)"] -->|update| F
            F["23.10.2 (Cobia)"] -->|update| G
            G["24.04.2.5 (Dragonfish)"] -->|update| H
            H["24.10.2.3 (Electric Eel)"] -->|update| I
            I["25.04.2.3 (Fangtooth)"]
          {{< /mermaid >}}
        </div>
      </div>
    </div>
    <div class="upgrade-paths-container">
      <img src="/images/TrueNAS_Enterprise.png" style="box-shadow: none; max-width: 225px; padding-bottom: 20px; padding-top: 40px;" title="TrueNAS Enterprise" alt="TrueNAS Enterprise">
      <div class="scroll-container" id="scrollContainer2">
        <div class="chart-wrapper">
          {{< mermaid class="mermaid_sizing" >}}
          flowchart LR
            A["11.3-U5"] -->|update| B
            B["12.0-U8.1"] -->|update| C
            C["13.0-U6.8"] -->|ISO install| F
            C -->|update| E
            D["23.10.2 (Cobia)"] -->|update| E
            E["24.04.2.5 (Dragonfish)"]  -->|update| F
            F["24.10.2.3 (Electric Eel)"] -->|"(anticipated)"| G
            G["25.04.2.3 (Fangtooth)"]
          {{< /mermaid >}}
        </div>
      </div>
    </div>
</div>

<script>
  // Scroll to the rightmost part of the chart when the page loads
  document.addEventListener("DOMContentLoaded", function() {
    var scrollContainer1 = document.getElementById("scrollContainer1");
    scrollContainer1.scrollLeft = scrollContainer1.scrollWidth;

    var scrollContainer2 = document.getElementById("scrollContainer2");
    scrollContainer2.scrollLeft = scrollContainer2.scrollWidth;
  });

  // Add click and drag scrolling functionality
  const addDragScroll = (scrollContainer) => {
    let isDown = false;
    let startX;
    let scrollLeft;

    scrollContainer.addEventListener('mousedown', (e) => {
      isDown = true;
      scrollContainer.classList.add('active');
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
      scrollContainer.style.userSelect = 'none'; // Prevent text selection
    });

    scrollContainer.addEventListener('mouseleave', () => {
      isDown = false;
      scrollContainer.classList.remove('active');
      scrollContainer.style.userSelect = ''; // Re-enable text selection
    });

    scrollContainer.addEventListener('mouseup', () => {
      isDown = false;
      scrollContainer.classList.remove('active');
      scrollContainer.style.userSelect = ''; // Re-enable text selection
    });

    scrollContainer.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 2; // Adjust scrolling speed
      scrollContainer.scrollLeft = scrollLeft - walk;
    });
  };

  // Apply drag scroll functionality to both containers
  const scrollContainer1 = document.getElementById('scrollContainer1');
  const scrollContainer2 = document.getElementById('scrollContainer2');
  addDragScroll(scrollContainer1);
  addDragScroll(scrollContainer2);
</script>
