#!/usr/bin/env bash

set -ex

node -v
npm --version
CURRENT_BRANCH=$(git branch --show-current)
echo "Current branch is $CURRENT_BRANCH"

CURRENT_WORKING_DIRECTORY=$(pwd)

npm ci
npx lerna bootstrap
npx lerna exec --concurrency 1 --stream -- "test ! -f  scripts/ci/setup.sh || bash \
scripts/ci/setup.sh"
npm install --no-save --no-package-lock "@busybox/commitlint-config@./packages/commitlint-config" "@busybox/eslint-config@./packages/eslint-config" "@busybox/prettier-config@./packages/prettier-config"