#!/bin/bash
# Push git and submodules to upstream

(
  set -e
  set -x

  git push
  (cd src/nor/pipeline/ && git push)
  (cd src/nor/ts/ && git push)
  (cd src/nor/matrix/ && git push)

) && echo Success || echo FAIL
