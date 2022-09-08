#!/usr/bin/env bash

set -ex

rm -f package-lock.json
rm -rf node_modules
rm -rf ./packages/**/node_modules
npm install
npx lerna bootstrap