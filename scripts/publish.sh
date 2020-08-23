#!/usr/bin/env bash

set -ex

git config user.email "github-action@github.com"
git config user.name "GitHub Action"
echo "//registry.npmjs.org/:_authToken=\${NPM_TOKEN}" > ~/.npmrc
HUSKY_SKIP_HOOKS=1 yarn lerna publish --yes
