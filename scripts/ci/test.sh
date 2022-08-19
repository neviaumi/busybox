#!/usr/bin/env bash

set -ex

# Only able work after that issue fixed
# https://github.com/npm/cli/issues/3472
# npm audit
npx eslint --ignore-pattern package-lock.json .
npx lerna exec --stream -- "test ! -f  scripts/ci/test.sh || bash \
scripts/ci/test.sh"