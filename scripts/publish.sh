#!/usr/bin/env bash

set -ex

git config user.email "github-action@github.com"
git config user.name "GitHub Action"
echo "//npm.pkg.github.com//:_authToken=\${GH_TOKEN}" > ~/.npmrc
yarn lerna publish --yes
