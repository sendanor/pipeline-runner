#!/bin/sh
set -e
set -x

npm run build
docker build -t pipeline-runner .
