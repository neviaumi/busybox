#!/usr/bin/env bash

set -ex

npx eslint .
npx ng build ngx-components
npm run test
