#!/bin/bash

# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

VERSION=$(node -p -e "require('../package.json').version")
PROJECT_NAME=$(node -p -e "require('../package.json').name")

# if local tag exists -> delete local tag
if git rev-parse v$VERSION >/dev/null 2>&1; then
  git tag -d v$VERSION
fi

# set new tag
git tag $PROJECT_NAME-$VERSION

# push new tag
git push origin $PROJECT_NAME-$VERSION