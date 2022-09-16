#!/usr/bin/env bash

set -ex

git config user.email "github-action@github.com"
git config user.name "GitHub Action"
echo "//registry.npmjs.org/:_authToken=\${NPM_TOKEN}" > ~/.npmrc
npx lerna exec --stream -- "test ! -f  scripts/ci/pre-publish.sh || bash \
scripts/ci/pre-publish.sh"

if [-z "$PREFERRED_VERSION"]; then
  VERSION=$PREFERRED_VERSION
  if ["$GITHUB_REF_NAME" -eq "development"]; then
    VERSION=$(date +'%Y.%-m.%-d-alpha.%-H%-M')
  else
    VERSION=$(date +'%Y.%-m.%-d')
  fi
fi
HUSKY=0 npx lerna version --yes $VERSION

HUSKY=0 npx lerna publish --yes from-git
