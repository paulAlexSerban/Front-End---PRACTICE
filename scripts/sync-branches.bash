#!/bin/bash

### MAIN / env: STAGE
echo "Checkout to MAIN branch"
git checkout main

echo "Pull changes on MAIN branch"
git pull

### RELEASE / env: TEST
echo "Checkout RELEASE branch"
git checkout release

echo "Merge main branch in RELEASE branch"
git merge main

echo "Push synchronized RELEASE branch to remote repository"
git push

### DEVELOP / env: DEVELOP
echo "Checkout DEVELOP branch"
git checkout develop

echo "Merge MAIN branch in DEVELOP branch"
git merge main

echo "Push synchronized DEVELOP branch to remote repository"
git push
