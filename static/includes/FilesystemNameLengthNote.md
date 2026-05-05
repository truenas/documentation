&NewLine;

{{< hint type=note title="Filename and Path Length Limits" >}}
TrueNAS measures filename and path length limits in **bytes**, not characters.
For standard ASCII characters (English letters, numbers, and common symbols), one character equals one byte.
Characters from other scripts — such as Chinese, Arabic, or accented characters — and emoji can each occupy 2–4 bytes, which significantly reduces the number of characters that fit within the limit.
For example, a 4-byte emoji counts as 4 bytes against a 255-byte filename limit, allowing approximately 63 emoji rather than 255 characters.
Keep filenames short and descriptive to avoid unexpected truncation.
{{< /hint >}}
