#!/usr/bin/env bash

set -ex

export HUSKY=0
git config user.email "github-action@github.com"
git config user.name "GitHub Action"
echo "//registry.npmjs.org/:_authToken=\${NPM_TOKEN}" > ~/.npmrc

if [ -n "$PREFERRED_VERSION" ]; then
  echo "Use version: $PREFERRED_VERSION"
  VERSION=$PREFERRED_VERSION
else
  echo "Use date version"
  if [ "$GITHUB_REF_NAME" == "development" ]; then
    echo "Use date version on development"
    VERSION=$(date +"%Y.%-m.%-d-alpha.$(($(date +"%-H") + 1))%M")
  else
    echo "Use date version on master"
    VERSION=$(date +'%Y.%-m.%-d')
  fi
fi
export RELEASE_BRANCH="release-$VERSION"
COMMIT_MESSAGE="release(npm): publish $VERSION [skip ci]"
git switch -c "$RELEASE_BRANCH"
git push --set-upstream origin "$RELEASE_BRANCH"

npx lerna version --message "$COMMIT_MESSAGE" --yes $VERSION
npx lerna exec --stream -- "test ! -f  scripts/ci/pre-publish.sh || bash \
scripts/ci/pre-publish.sh"
npx lerna publish --message "$COMMIT_MESSAGE" --yes from-git
export RELEASE_VERSION=$VERSION