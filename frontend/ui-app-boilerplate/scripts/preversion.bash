#!/bin/bash

# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

# set git config to not push tags automatically
git config --global push.followTags false