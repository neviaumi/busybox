#!/usr/bin/env bash

set -ex

npx tsc
npx eslint --resolve-plugins-relative-to ../../node_modules/@busybox/eslint-config .