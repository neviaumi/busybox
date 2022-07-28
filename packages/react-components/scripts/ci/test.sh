#!/usr/bin/env bash

set -ex

npx eslint .
npx cypress run --component
npx start-storybook --smoke-test
npx webpack
npx tsc
