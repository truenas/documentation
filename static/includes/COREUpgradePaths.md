&NewLine;

<style>
/* Custom CSS to override Mermaid background color */
#core-upgrade-paths .mermaid {
    background-color: inherit;
}
</style>
<div class="section-box" id="core-upgrade-paths" style="padding: 0 40px 40px 40px; margin-bottom: 20px;">
    <div class="upgrade-paths-container">
      <img src="/images/truenas-core-logo.png" style="box-shadow: none; max-width: 225px; padding-bottom: 20px; padding-top: 40px;" title="TrueNAS CORE" alt="TrueNAS CORE">
      {{< mermaid class="mermaid_sizing" >}}
      flowchart LR
      A["11.0-U7"] -->|update| B["11.2-U8"]
      B -->|update| C["11.3-U5"]
      C -->|update| D["13.0-U6.1"]
      D -->|"(anticipated)"| E["13.3.0"]
      {{< /mermaid >}}
    </div>
    <div class="upgrade-paths-container">
      <img src="/images/tn-enterprise-logo.png" style="box-shadow: none; max-width: 225px; padding-bottom: 20px; padding-top: 40px;" title="TrueNAS CORE Enterprise" alt="TrueNAS CORE Enterprise">
      {{< mermaid class="mermaid_sizing" >}}
      flowchart LR
      A["11.0-U7"] -->|update| B["11.2-U8"]
      B -->|update| C["11.3-U5"]
      C -->|update| D["13.0-U6.1"]
      {{< /mermaid >}}
    </div>
</div>
