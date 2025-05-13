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
            A["11.3-U5"] -->|update| B["12.0-U8.1"]
            B -->|"update<br><br>ISO install"| C["13.0-U6.4<br><br>13.3-U1"]
            C -->|ISO install| H
            C -->|ISO install| I
            D["22.02.4 (Angelfish)"] -->|update| E
            E["22.12.4.2 (Bluefin)"] -->|update| F
            F["23.10.2 (Cobia)"] -->|update| G
            G["24.04.2.5 (Dragonfish)"] -->|update| H
            H["24.10.2.2 (Electric Eel)"] -->|update| I
            I["25.04.0 (Fangtooth)"]
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
            A["11.3-U5"] -->|update| B
            B["12.0-U8.1"] -->|update| C
            C["13.0-U6.4"] -->|ISO install| F
            C["13.0-U6.4"] -->|"(anticipated)"| G
            D["23.10.2 (Cobia)"] -->|update| E
            E["24.04.2.5 (Dragonfish)"]  -->|update| F
            F["24.10.2.2 (Electric Eel)"] -->|"(anticipated)"| G
            G["25.04 (Fangtooth)"]
          {{< /mermaid >}}
        </div>
      </div>
    </div>
</div>
