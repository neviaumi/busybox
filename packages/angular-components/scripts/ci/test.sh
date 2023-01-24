#!/usr/bin/env bash

set -ex

# npx ng test --no-watch --no-progress --browsers=ChromeHeadlessCI ngx-components
# not linting test-app because it would complain import/no-unresolved on CI
./node_modules/.bin/ng lint ngx-components
./node_modules/.bin/ng build ngx-components
npm run test
