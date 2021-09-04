#!/bin/bash
# Update git and submodules from upstream
(
  set -e
  set -x

  git pull -q
  if test -d src/nor/matrix/   ; then ( cd src/nor/matrix/   && git pull -q ); fi
  if test -d src/nor/pipeline/ ; then ( cd src/nor/pipeline/ && git pull -q ); fi
  if test -d src/nor/ts/       ; then ( cd src/nor/ts/       && git pull -q ); fi
  if test -d src/nor/ui/       ; then ( cd src/nor/ui/       && git pull -q ); fi

) && echo Success || echo FAIL
