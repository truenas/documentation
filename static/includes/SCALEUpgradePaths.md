&NewLine;

Update to the latest maintenance release of the current major version before upgrading to the next major version.
You can then upgrade directly from the latest maintenance release to the latest release of the next major version.

{{< hint type=note >}}
This chart shows the basic upgrade paths between TrueNAS major versions.
Depending on your use case and risk tolerance, you might prefer to delay upgrading to allow additional time for testing and stability.
See the <a href="https://www.truenas.com/docs/softwarestatus/#which-truenas-version-is-recommended" target="_blank">TrueNAS Software Status</a> for version recommendations tailored to different user types from Developer to Mission Critical.
{{< /hint >}}

<div class="section-box" id="tn-upgrade-paths" style="padding: 0 40px 40px 40px; margin-bottom: 20px;">
    <div class="community-paths-container">
      <img src="/images/truenas-community-edition-logo-blue.png" class="light-mode-logo" style="box-shadow: none; max-width: 225px; padding-bottom: 20px; padding-top: 40px;" title="TrueNAS Community Edition" alt="TrueNAS Community Edition">
      <img src="/images/truenas-community-edition-logo-white.png" class="dark-mode-logo" style="box-shadow: none; max-width: 225px; padding-bottom: 20px; padding-top: 40px; display: none;" title="TrueNAS Community Edition" alt="TrueNAS Community Edition">
      <div class="scroll-wrapper">
        <button class="scroll-nav scroll-nav-left" aria-label="Scroll left" title="Scroll left">‹</button>
        <button class="scroll-nav scroll-nav-right" aria-label="Scroll right" title="Scroll right">›</button>
        <div class="scroll-container" id="scrollContainer1">
          <div class="chart-wrapper">
            {{< mermaid class="mermaid_sizing" >}}
            flowchart LR
              A["11.3-U5"] -->|update| B["12.0-U8.1"]
              B -->|"update / ISO install"| C["13.0-U6.8 / 13.3-U2"]
              C -->|update| G
              C -->|ISO install| J
              D["22.02.4 (Angelfish)"] -->|update| E
              E["22.12.4.2 (Bluefin)"] -->|update| F
              F["23.10.2 (Cobia)"] -->|update| G
              G["24.04.2.5 (Dragonfish)"] -->|update| H
              H["24.10.2.4 (Electric Eel)"] -->|update| I
              I["25.04.2.6 (Fangtooth)"] -->|update| J
              J["25.10.3 (Goldeye)"] -->|"anticipated"| K
              K["TrueNAS 26.0"]
            {{< /mermaid >}}
          </div>
        </div>
        <div class="scroll-indicator" id="scrollIndicator1">
          <div class="scroll-dot" data-section="0" title="Beginning"></div>
          <div class="scroll-dot" data-section="1" title="Middle"></div>
          <div class="scroll-dot active" data-section="2" title="Latest versions"></div>
        </div>
      </div>
    </div>
    <div class="upgrade-paths-container">
      <img src="/images/truenas-enterprise-logo-logo-blue.png" class="light-mode-logo" style="box-shadow: none; max-width: 225px; padding-bottom: 20px; padding-top: 40px;" title="TrueNAS Enterprise" alt="TrueNAS Enterprise">
      <img src="/images/truenas-enterprise-logo-logo-white-rgb-900px-w-72ppi.png" class="dark-mode-logo" style="box-shadow: none; max-width: 225px; padding-bottom: 20px; padding-top: 40px; display: none;" title="TrueNAS Enterprise" alt="TrueNAS Enterprise">
      <div class="scroll-wrapper">
        <button class="scroll-nav scroll-nav-left" aria-label="Scroll left" title="Scroll left">‹</button>
        <button class="scroll-nav scroll-nav-right" aria-label="Scroll right" title="Scroll right">›</button>
        <div class="scroll-container" id="scrollContainer2">
          <div class="chart-wrapper">
            {{< mermaid class="mermaid_sizing" >}}
            flowchart LR
              A["11.3-U5"] -->|update| B
              B["12.0-U8.1"] -->|update| C
              C["13.0-U6.8"] -->|ISO install| H
              C -->|update| E
              D["23.10.2 (Cobia)"] -->|update| E
              E["24.04.2.5 (Dragonfish)"]  -->|update| F
              F["24.10.2.4 (Electric Eel)"] -->|update| G
              G["25.04.2.6 (Fangtooth)"] -->|update| H
              H["25.10.1 (Goldeye)"] -->|"anticipated"| I
              I["TrueNAS 26.0"]
            {{< /mermaid >}}
          </div>
        </div>
        <div class="scroll-indicator" id="scrollIndicator2">
          <div class="scroll-dot" data-section="0" title="Beginning"></div>
          <div class="scroll-dot" data-section="1" title="Middle"></div>
          <div class="scroll-dot active" data-section="2" title="Latest versions"></div>
        </div>
      </div>
    </div>
</div>

Permitted upgrade methods are:

* **update**: Apply updates using the **Update** screen in the TrueNAS UI or install a manual update file.
  Not all upgrade paths support automatic updates (see chart).
* **ISO install**: Save your TrueNAS configuration file, perform a fresh install using an <file>.iso</file> file for the target version, then upload the saved configuration.

You can skip major versions using a fresh installation with configuration file restore.
Before skipping versions, review release notes for each major version to identify service deprecations or significant changes that might affect your configuration.
Consider upgrading incrementally through major versions with significant changes, or be prepared to manually reconfigure any incompatibilities after upgrading directly to the target version.

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

/* Enhanced scroll container with navigation controls */
.scroll-wrapper {
    position: relative;
    width: calc(100% - 80px); /* Leave space for arrows (40px each side) */
    margin: 0 40px; /* Center the container with arrow space */
}

.scroll-container {
    overflow-x: auto;
    white-space: nowrap;
    width: 100%;
    cursor: grab;
    user-select: none;
    position: relative;
    scroll-behavior: smooth;
}

.scroll-container:active {
    cursor: grabbing;
}

.scroll-container:hover {
    background: rgba(0, 149, 213, 0.02);
    border-radius: 8px;
    transition: background-color 0.2s ease;
}

/* Hide scrollbars completely for clean dot-only navigation */
.scroll-container::-webkit-scrollbar {
  display: none;
}

.scroll-container {
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
}

/* Navigation arrows - always visible for discoverability */
.scroll-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 149, 213, 0.8);
    color: white;
    border: none;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    cursor: pointer;
    z-index: 20;
    opacity: 1; /* Always visible */
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.scroll-nav:hover {
    background: rgba(0, 149, 213, 1);
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}

.scroll-nav:active {
    transform: translateY(-50%) scale(0.95);
}

.scroll-nav-left {
    left: -3.5rem; /* Closer to the edge, further from container */
}

.scroll-nav-right {
    right: -3.5rem; /* Closer to the edge, further from container */
}

/* Hide arrows when at scroll boundaries */
.scroll-nav.hidden {
    opacity: 0 !important;
    pointer-events: none;
}

/* Edge fade gradients - positioned relative to the scroll wrapper */
.scroll-wrapper::before,
.scroll-wrapper::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 40px;
    pointer-events: none;
    z-index: 5;
    transition: opacity 0.3s ease;
}

.scroll-wrapper::before {
    left: 0;
    background: linear-gradient(to right, var(--card-background) 0%, transparent 100%);
}

.scroll-wrapper::after {
    right: 0;
    background: linear-gradient(to left, var(--card-background) 0%, transparent 100%);
}

/* Hide gradients at scroll boundaries */
.scroll-wrapper.at-start::before {
    opacity: 0;
}

.scroll-wrapper.at-end::after {
    opacity: 0;
}

/* Scroll position indicator */
.scroll-indicator {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    gap: 4px;
}

.scroll-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(0, 149, 213, 0.3);
    transition: all 0.3s ease;
    cursor: pointer;
}

.scroll-dot.active {
    background: #0095d5;
    transform: scale(1.2);
}

.scroll-dot:hover {
    background: #0071a2;
    transform: scale(1.1);
}

.chart-wrapper {
    display: inline-block;
    width: 1400px; /* Force fixed width instead of min-width */
}

/* Make sure the SVG fills the wrapper */
.chart-wrapper svg {
    width: 100% !important;
    max-width: none !important;
    min-width: 1400px;
}
</style>
