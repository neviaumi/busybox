#!/usr/bin/env bash

set -ex

git config user.email "github-action@github.com"
git config user.name "GitHub Action"
echo "//registry.npmjs.org/:_authToken=\${NPM_TOKEN}" > ~/.npmrc
npx lerna exec --stream -- "test ! -f  scripts/ci/pre-publish.sh || bash \
scripts/ci/pre-publish.sh"

HUSKY=0 npx lerna publish --yes from-git
