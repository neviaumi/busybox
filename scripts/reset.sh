#!/usr/bin/env bash
set -ex

rm -rf ./packages/**/node_modules
rm -rf node_modules
rm -f package-lock.json
npm i
