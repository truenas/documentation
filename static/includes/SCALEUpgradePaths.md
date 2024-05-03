&NewLine;

{{< mermaid class="mermaid_sizing" >}}
%%{
  init: {
    'theme': 'base',
    'themeVariables': {
      'primaryColor': '#FFFFFF',
      'primaryTextColor': '#000000',
      'primaryBorderColor': '#0095d5',
      'secondaryColor': '#70d4ff',
      'lineColor': '#0095d5',
      'secondaryTextColor': '#FFFFFF',
      'tertiaryColor': '#0095d5'
    }
  }
}%%

flowchart LR

A["22.02.4 (Angelfish)"] -->|update| C
B[CORE 13.0-U6.1] -->|ISO install| E
C["22.12.4.2 (Bluefin)"] -->|update| D
D["23.10.2 (Cobia)"] -->|update| E
E["24.04.0 (Dragonfish)"]
{{< /mermaid >}}

<img src="/images/tn-enterprise-logo.png" style="box-shadow: none; max-width: 225px; padding-bottom: 20px; padding-top: 40px;" title="TrueNAS SCALE Enterprise" alt="TrueNAS SCALE Enterprise">

{{< mermaid class="mermaid_sizing" >}}
%%{
  init: {
    'theme': 'base',
    'themeVariables': {
      'primaryColor': '#FFFFFF',
      'primaryTextColor': '#000000',
      'primaryBorderColor': '#0095d5',
      'secondaryColor': '#70d4ff',
      'lineColor': '#0095d5',
      'secondaryTextColor': '#FFFFFF',
      'tertiaryColor': '#0095d5'
    }
  }
}%%

flowchart LR
A["CORE 13.0-U6.1"] -->|ISO install| D
B["Current 23.10 (Cobia) release"] -->|update| C["23.10.2 (Cobia)"] -->|update| D["24.04.0 (Dragonfish)"]
{{< /mermaid >}}