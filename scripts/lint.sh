#!/usr/bin/env bash

set -ex

npx eslint --ignore-pattern package-lock.json .
npx lerna run lint