#!/bin/bash

# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

VERSION=$(node -p -e "require('../package.json').version")
PROJECT_NAME=$(node -p -e "require('../package.json').name")

# delete local tag
git tag -d v$VERSION

# set new tag
git tag $PROJECT_NAME-$VERSION

# push new tag
git push origin $PROJECT_NAME-$VERSION