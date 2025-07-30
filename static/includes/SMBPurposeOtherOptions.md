&NewLine;
<div>

<!-- this styling adds diagonal header row at a 45 degree slant -->
<style>
.table-diagonal th {
    height: 150px;
    white-space: nowrap;
    position: relative;
}
.table-diagonal th > div {
    transform: rotate(45deg);
    position: absolute;
    bottom: 20px;
    left: 20px;
    transform-origin: bottom left;
}
.table-diagonal th, .table-diagonal td {
    padding: 10px;
    text-align: center;
    border: 1px solid #ccc;
}
</style>

| | Default Share | Time Machine | Multi-Protocol | Time Locked | Private Datasets | External | 
|-|---------------|--------------|----------------|-------------|----------------- |----------|
| **Use Apple-style character Encloding** | x |  | x | x | x |  |
| **Dataset Name Schema** |  |  |  |  | x |  |
| **Auto Qutoa** |  |  |  |  | x |  |
| **Grace Period** |  |  |  | x |  |  |
| **Time Machine Quota** |  | x |  |  |  |  |
| **VUID** |  | x |  |  |  |  |
| **Auto Snapshot** |  | x |  |  |  |  |
| **Auto Dataset Creation** |  | x |  |  |  |  |

</div>