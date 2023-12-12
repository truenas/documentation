&NewLine;

The TrueNAS web interface lets users save debugging information to a text file.

On TrueNAS CORE systems, go to **System > Advanced** and click **SAVE DEBUG**.

{{< trueimage src="/images/CORE/System/GenerateDebugFile.png" alt="Generate Debug Warning" id="Generate Debug Warning" >}}

Click **PROCEED** to generate the debug file (might take a few minutes).
After generating the debug file, TrueNAS prompts you to download it to your local system and saves a copy in <file>/var/tmp/fndebug</file>.

The `freenas-debug` command-line utility collects debugging information.

