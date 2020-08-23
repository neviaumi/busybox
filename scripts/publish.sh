#!/usr/bin/env bash

set -ex

echo "//registry.npmjs.org/:_authToken=\${NPM_TOKEN}" > ~/.npmrc
HUSKY_SKIP_HOOKS=1 yarn lerna publish --yes
