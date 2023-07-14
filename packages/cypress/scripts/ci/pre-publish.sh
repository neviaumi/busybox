#!/usr/bin/env bash

set -ex

npx babel src --out-dir dist --extensions ".ts"
npx tsc
