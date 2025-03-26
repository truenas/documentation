#!/bin/bash

# Define the directory to clean up (relative to the script's location)
BASE_DIR=$(dirname "$(realpath "$0")")/../Apps_Temp

# Check if the directory exists
if [ -d "$BASE_DIR" ]; then
  echo "Cleaning up temporary directory: $BASE_DIR"
  rm -rf "$BASE_DIR"
  echo "Temporary directory removed successfully."
else
  echo "No temporary directory to clean up at: $BASE_DIR"
fi