&NewLine;

<style>
/* Custom CSS to override Mermaid background color */
#scale-upgrade-paths .mermaid {
    background-color: inherit;
}

/* Logo visibility for light/dark modes */
/* Default light mode */
.dark-mode-logo { display: none !important; }
.light-mode-logo { display: block !important; }

/* Manual dark mode selection */
:root[color-theme="dark"] .light-mode-logo { display: none !important; }
:root[color-theme="dark"] .dark-mode-logo { display: block !important; }

/* Manual light mode selection */
:root[color-theme="light"] .dark-mode-logo { display: none !important; }
:root[color-theme="light"] .light-mode-logo { display: block !important; }

/* System preference fallback */
@media (prefers-color-scheme: dark) {
    :root:not([color-theme]) .light-mode-logo { display: none !important; }
    :root:not([color-theme]) .dark-mode-logo { display: block !important; }
}

@media (prefers-color-scheme: light) {
    :root:not([color-theme]) .dark-mode-logo { display: none !important; }
    :root:not([color-theme]) .light-mode-logo { display: block !important; }
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

Update to the latest maintenance release of the current major version before upgrading to the next major version.
You can then upgrade directly from the latest maintenance release to the latest release of the next major version.

{{< hint type=note >}}
This chart shows the basic upgrade paths between TrueNAS major versions.
Depending on your use case and risk tolerance, you may prefer to delay upgrading to allow additional time for testing and stability.
See the <a href="https://www.truenas.com/docs/softwarestatus/#which-truenas-version-is-recommended" target="_blank">TrueNAS Software Status</a> for version recommendations tailored to different user types from Developer to Mission Critical.
{{< /hint >}}

<div class="section-box" id="scale-upgrade-paths" style="padding: 0 40px 40px 40px; margin-bottom: 20px;">
    <div class="upgrade-paths-container">
      <img src="/images/truenas-community-edition-logo-blue.png" class="light-mode-logo" style="box-shadow: none; max-width: 225px; padding-bottom: 20px; padding-top: 40px;" title="TrueNAS Community Edition" alt="TrueNAS Community Edition">
      <img src="/images/truenas-community-edition-logo-white.png" class="dark-mode-logo" style="box-shadow: none; max-width: 225px; padding-bottom: 20px; padding-top: 40px; display: none;" title="TrueNAS Community Edition" alt="TrueNAS Community Edition">
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
            I["25.04.2.1 (Fangtooth)"]
          {{< /mermaid >}}
        </div>
      </div>
    </div>
    <div class="upgrade-paths-container">
      <img src="/images/truenas-enterprise-logo-logo-blue.png" class="light-mode-logo" style="box-shadow: none; max-width: 225px; padding-bottom: 20px; padding-top: 40px;" title="TrueNAS Enterprise" alt="TrueNAS Enterprise">
      <img src="/images/truenas-enterprise-logo-logo-white-rgb-900px-w-72ppi.png" class="dark-mode-logo" style="box-shadow: none; max-width: 225px; padding-bottom: 20px; padding-top: 40px; display: none;" title="TrueNAS Enterprise" alt="TrueNAS Enterprise">
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
            G["25.04.2 (Fangtooth)"]
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

Permitted upgrade methods are:

* **update**: Apply updates using the **Update** screen in the TrueNAS UI or install a manual update file.
  Not all upgrade paths support automatic updates (see chart).
* **ISO install**: Save your TrueNAS configuration file, perform a fresh install using an .iso file for the target version, then upload the saved configuration.

You can skip major versions using a fresh installation with configuration file restore.
Before skipping versions, review release notes for each major version to identify service deprecations or significant changes that may affect your configuration.
Consider upgrading incrementally through major versions with significant changes, or be prepared to manually reconfigure any incompatibilities after upgrading directly to the target version.
