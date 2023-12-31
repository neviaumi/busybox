#!/usr/bin/env bash

set -ex

npx tsc
npx babel src --out-dir dist --extensions ".ts"