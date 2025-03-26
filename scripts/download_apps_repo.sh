#!/bin/bash

# Define the base directory relative to the current script location
BASE_DIR=$(dirname "$(realpath "$0")")/../Apps_Temp

# Create the temporary directory with a specific name
TEMP_DIR="$BASE_DIR"

# Check if the directory already exists, and if so, clean it up
if [ -d "$TEMP_DIR" ]; then
  echo "Cleaning up existing temporary directory: $TEMP_DIR"
  rm -rf "$TEMP_DIR"
fi

# Create the directory
mkdir -p "$TEMP_DIR"

# Print a status message indicating the download is starting
echo "Starting to download the 'trains' directory from the GitHub repository into: $TEMP_DIR"

# Define the GitHub repository URL
REPO_URL="https://github.com/truenas/apps"

git clone -b master --depth=1 $REPO_URL $BASE_DIR
if [ $? -ne 0 ]; then
  echo "'trains' directory successfully downloaded to: $TEMP_DIR"
else
  echo "Failed to download the 'trains' directory. Please check the URL or your network connection."
  exit 1
fi
