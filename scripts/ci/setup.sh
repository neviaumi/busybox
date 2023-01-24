#!/usr/bin/env bash

set -ex

node -v
npm --version
npm ci
npx lerna bootstrap
npx lerna exec --stream -- "test ! -f  scripts/ci/setup.sh || bash \
scripts/ci/setup.sh"