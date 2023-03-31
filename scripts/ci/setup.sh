#!/usr/bin/env bash

set -ex

node -v
npm --version
CURRENT_BRANCH=$(git branch --show-current)
echo "Current branch is $CURRENT_BRANCH"

CURRENT_WORKING_DIRECTORY=$(pwd)

cd ./packages/prettier-config
npm ci
npm pack
mv busybox-prettier-config-*.tgz busybox-prettier-config-latest.tgz
cd "$CURRENT_WORKING_DIRECTORY"
cd ./packages/eslint-config
npm ci
npm pack
mv busybox-eslint-config-*.tgz busybox-eslint-config-latest.tgz
cd "$CURRENT_WORKING_DIRECTORY"

cd "$CURRENT_WORKING_DIRECTORY"
npm ci
npx lerna bootstrap
npx lerna exec --stream -- "test ! -f  scripts/ci/setup.sh || bash \
scripts/ci/setup.sh"