&NewLine;

**TrueNAS SCALE**

{{< mermaid class="mermaid_sizing" >}}
flowchart LR

A["22.02.4 (Angelfish)"] -->|update| C
B[CORE 13.0-U6.1] -->|ISO install| E
C["22.12.4.2 (Bluefin)"] -->|update| D
D["23.10.2 (Cobia)"] -->|update| E
E["24.04.0 (Dragonfish)"]
{{< /mermaid >}}

**TrueNAS SCALE Enterprise**

{{< mermaid class="mermaid_sizing" >}}
flowchart LR
A["CORE 13.0-U6.1"] -->|ISO install| D
B["Current 23.10 (Cobia) release"] -->|update| C["23.10.2 (Cobia)"] -->|update| D["24.04.0 (Dragonfish)"]
{{< /mermaid >}}