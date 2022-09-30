#!/usr/bin/env bash

set -x

bash ./scripts/reset.sh
git diff --exit-code > /dev/null
GIT_DIFF_EXIST_CODE=$?
set -e
if [ $GIT_DIFF_EXIST_CODE -eq 1 ]; then
  git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
  git config user.name "github-actions[bot]"
  git add .
  git commit --fixup HEAD
  git push
  echo "Fixed package-lock.json incorrect!"
  exit 1
fi
