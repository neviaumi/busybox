#!/usr/bin/env bash

set -ex

npm install
npx lerna bootstrap
npx lerna exec --stream -- "test ! -f  scripts/ci/setup.sh || bash \
scripts/ci/setup.sh"