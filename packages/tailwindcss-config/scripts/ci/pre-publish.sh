#!/usr/bin/env bash

set -ex

npx tsc
npx babel tailwind.config.ts --out-dir dist --extensions ".ts"