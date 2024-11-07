&NewLine;

<style>
/* Custom CSS to override Mermaid background color */
#scale-upgrade-paths .mermaid {
    background-color: inherit;
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
            E["24.04.2.4 (Dragonfish)"] -->|update| H
            H["24.10.0.1 (Electric Eel)"]
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
            D["24.04.2.4 (Dragonfish)"]  -->|"(anticipated)"| E
            E["24.10.0.1 (Electric Eel)"]
          {{< /mermaid >}}
        </div>
      </div>
    </div>
</div>
