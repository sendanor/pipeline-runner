#!/bin/bash
# Push git and submodules to upstream
(
  set -e
  set -x

  git push -q
  if test -d src/nor/matrix/   ; then ( cd src/nor/matrix/   && git push -q ); fi
  if test -d src/nor/pipeline/ ; then ( cd src/nor/pipeline/ && git push -q ); fi
  if test -d src/nor/ts/       ; then ( cd src/nor/ts/       && git push -q ); fi
  if test -d src/nor/ui/       ; then ( cd src/nor/ui/       && git push -q ); fi

) && echo Success || echo FAIL
