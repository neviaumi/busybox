#!/usr/bin/env bash

set -ex

# not linting test-app because it would complain import/no-unresolved on CI
npx ng lint ngx-components
npx ng build ngx-components
npm run test
