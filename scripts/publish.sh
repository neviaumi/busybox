#!/usr/bin/env bash

set -ex

git config user.email "github-action@github.com"
git config user.name "GitHub Action"
git fetch --depth=1 origin +refs/tags/*:refs/tags/*
echo "//registry.npmjs.org/:_authToken=\${NPM_TOKEN}" > ~/.npmrc
yarn lerna publish --yes
