# Define relative paths
$targetFolders = @(".\static\includes", ".\static\images")
$contentDir = ".\content"
$includesDir = ".\static\includes"
$layoutsDir = ".\layouts"
$dataPropertiesDir = ".\data\properties"
$configFile = ".\config.toml"

# Initialize counters
$totalFiles = 0
$reviewedFiles = 0
$deletedFilesCount = 0
$deletedFiles = @()

# Get the current date and time
$dateTime = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

# Get the user who initiated the process
$userName = (Get-ItemProperty "HKCU:\\Software\\Microsoft\\Office\\Common\\UserInfo\\").UserName

# Process started indicator
Write-Output "Process started... Reviewing snippets and image files."

foreach ($targetFolder in $targetFolders) {
    # Get all files in the target folder and its subdirectories
    $files = Get-ChildItem -Path $targetFolder -Recurse -File
    $totalFiles += $files.Count

    foreach ($file in $files) {
        $reviewedFiles++
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
        Write-Progress -Activity "Reviewing files..." -Status "$reviewedFiles of $totalFiles reviewed" -PercentComplete (($reviewedFiles / $totalFiles) * 100)
    }
}

# Prepare log content
$logFilePath = ".\cleanup_log.txt"
$logContent = @()
$logContent += "Process time: $dateTime"
$logContent += "Initiated by: $userName"
$logContent += ""
$logContent += "$reviewedFiles files reviewed."
$logContent += "$deletedFilesCount files deleted."

if ($deletedFilesCount -gt 0) {
    $logContent += "The following files were deleted:"
    $logContent += $deletedFiles
    Write-Output "Log file updated: $logFilePath"
} else {
    $logContent += "All files currently in use."
    Write-Output "All files currently in use."
    Write-Output "Log file updated: $logFilePath"
}

$logContent += ""
$logContent += "-" * 40  # Horizontal divider line

# Append log content to the beginning of the file
if (Test-Path $logFilePath) {
    $existingContent = Get-Content $logFilePath
    $logContent + $existingContent | Set-Content $logFilePath
} else {
    $logContent | Set-Content $logFilePath
}
