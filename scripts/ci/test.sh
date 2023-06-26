#!/usr/bin/env bash

set -ex

# npm audit
npx eslint --ignore-pattern package-lock.json .
npx lerna exec --stream -- "test ! -f  scripts/ci/test.sh || bash \
scripts/ci/test.sh"
