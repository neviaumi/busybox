#!/usr/bin/env bash

set -ex

bash ./scripts/reset.sh
git diff --exit-code
GIT_DIFF_EXIST_CODE=$?
if [ $GIT_DIFF_EXIST_CODE -eq 1 ]; then
  git add .
  git commit --fixup HEAD
  git push
  echo "Fixed package-lock.json incorrect!"
  exit 1
fi
