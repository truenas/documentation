# Define relative paths
$targetFolders = @(".\static\includes", ".\static\images")
$contentDir = ".\content"
$includesDir = ".\static\includes"
$layoutsDir = ".\layouts"
$dataPropertiesDir = ".\data\properties"
$configFile = ".\config.toml"

# Initialize counters
$totalFiles = 0
$checkedFiles = 0
$deletedFilesCount = 0
$deletedFiles = @()

# Process started indicator
Write-Output "Process started... Checking files."

foreach ($targetFolder in $targetFolders) {
    # Get all files in the target folder and its subdirectories
    $files = Get-ChildItem -Path $targetFolder -Recurse -File
    $totalFiles += $files.Count

    foreach ($file in $files) {
        $checkedFiles++
        $filename = $file.Name
        $foundInContent = Get-ChildItem -Path $contentDir -Recurse -File | Select-String -Pattern "\b$filename\b"
        $foundInIncludes = Get-ChildItem -Path $includesDir -Recurse -File | Select-String -Pattern "\b$filename\b"
        $foundInLayouts = Get-ChildItem -Path $layoutsDir -Recurse -File | Select-String -Pattern "\b$filename\b"
        $foundInDataProperties = Get-ChildItem -Path $dataPropertiesDir -Recurse -File | Select-String -Pattern "\b$filename\b"
        $foundInConfig = Get-Content $configFile | Select-String -Pattern "\b$filename\b"

        # If the file is not found in any of these locations, delete it
        if (-not $foundInContent -and -not $foundInIncludes -and -not $foundInLayouts -and -not $foundInDataProperties -and -not $foundInConfig) {
            Remove-Item $file.FullName
            # Log the deletion
            $deletedFiles += $file.FullName
            $deletedFilesCount++
        }

        # Update progress
        Write-Progress -Activity "Checking files..." -Status "$checkedFiles of $totalFiles checked" -PercentComplete (($checkedFiles / $totalFiles) * 100)
    }
}

# Final output
Write-Output "Process completed!"
Write-Output "$checkedFiles files checked."
Write-Output "$deletedFilesCount files deleted."

if ($deletedFilesCount -gt 0) {
    Write-Output "The following files were deleted:"
    $deletedFiles | ForEach-Object { Write-Output $_ }
} else {
    Write-Output "No files were deleted."
}
