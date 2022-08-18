#!/usr/bin/env bash

set -ex

npx eslint .
npx tsc
npx start-server-and-test 'npx start-storybook -p 6006 --ci' http://localhost:6006 'npm run test:storybook'
npx cypress run --component
npx vite build
