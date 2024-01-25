#!/usr/bin/env bash

set -ex

npx eslint .
node --test