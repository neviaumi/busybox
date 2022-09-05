#!/usr/bin/env bash

set -ex

npx ng test --no-watch --no-progress --browsers=ChromeHeadlessCI
# not linting test-app because it would complain import/no-unresolved on CI
npx ng lint ngx-components
npx ng build ngx-components
npm run test
