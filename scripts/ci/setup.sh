#!/usr/bin/env bash

set -ex

node -v
npm --version
CURRENT_BRANCH=$(git branch --show-current)
echo "Current branch is $CURRENT_BRANCH"

CURRENT_WORKING_DIRECTORY=$(pwd)

npm ci
npx lerna exec --concurrency 1 --stream -- "test ! -f  scripts/ci/setup.sh || bash \
scripts/ci/setup.sh"
