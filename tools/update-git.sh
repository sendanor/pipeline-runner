#!/bin/bash
# Update git and submodules from upstream

(
  set -e
  set -x

  git pull
  (cd src/nor/pipeline/ && git pull)
  (cd src/nor/ts/ && git pull)
  (cd src/nor/matrix/ && git pull)

) && echo Success || echo FAIL
