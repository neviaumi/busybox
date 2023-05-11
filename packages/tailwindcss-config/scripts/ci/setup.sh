#!/usr/bin/env bash

set -ex

npm ci
npm install --no-package-lock --no-save "@busybox/tsconfig@../tsconfig"
npx tsc