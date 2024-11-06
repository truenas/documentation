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

<div class="section-box" id="scale-upgrade-paths" style="padding: 0 40px 40px 40px; margin-bottom: 20px;">
    <div class="upgrade-paths-container">
      <img src="/images/tn-scale-logo.png" style="box-shadow: none; max-width: 225px; padding-bottom: 20px; padding-top: 40px;" title="TrueNAS SCALE" alt="TrueNAS SCALE">
      <div class="scroll-container" id="scrollContainer1">
        <div class="chart-wrapper">
          {{< mermaid class="mermaid_sizing" >}}
          flowchart LR
            A["22.02.4 (Angelfish)"] -->|update| C
            B["CORE 13.0-U6.2<br><br>CORE 13.3-RELEASE"] -->|ISO install| E
            C["22.12.4.2 (Bluefin)"] -->|update| D
            D["23.10.2 (Cobia)"] -->|update| E
            E["24.04.2.3 (Dragonfish)"] -->|update| H
            H["24.10.0 (Electric Eel)"]
          {{< /mermaid >}}
        </div>
      </div>
    </div>
    <div class="upgrade-paths-container">
      <img src="/images/tn-enterprise-logo.png" style="box-shadow: none; max-width: 225px; padding-bottom: 20px; padding-top: 40px;" title="TrueNAS SCALE Enterprise" alt="TrueNAS SCALE Enterprise">
      <div class="scroll-container" id="scrollContainer2">
        <div class="chart-wrapper">
          {{< mermaid class="mermaid_sizing" >}}
          flowchart LR
            A["CORE 13.0-U6.2"] -->|ISO install| D
            B["Current 23.10 (Cobia) release"] -->|update| C
            C["23.10.2 (Cobia)"] -->|update| D
            D["24.04.2.3 (Dragonfish)"]  -->|update| E
            E["24.10.0 (Electric Eel)"]
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
