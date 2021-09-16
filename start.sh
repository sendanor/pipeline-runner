#!/bin/sh
set -e
set -x

docker run \
  --detach \
  --name=agent-1 \
  --restart=always \
  --env-file ~/.nor-pipeline/agent1.env \
  pipeline-runner
