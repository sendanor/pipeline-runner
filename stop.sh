#!/bin/sh
set -e
set -x
docker update --restart=no agent-1
docker stop agent-1
