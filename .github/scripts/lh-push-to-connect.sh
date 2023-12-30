#!/bin/bash

set -eo pipefail

PWD_VAR=$(pwd)
UUID=66f9fa33-db8e-4591-9291-6f4619cb8801
ENV=live

echo $EXT_DIR
echo $RESULTS_PATH
echo $PWD_VAR
echo $CALLBACK
echo $CALLBACK_MSG

cd $RESULTS_PATH
rsync -raRLvz --relative --size-only --checksum --ipv4 --progress -e 'ssh -p 2222' . --temp-dir=~/tmp/ $ENV.$UUID@appserver.$ENV.$UUID.drush.in:files/$EXT_DIR

curl -H "api-key: $CONNECT_BC_API" -H 'Content-Type: application/json' -X POST $CALLBACK -d $CALLBACK_MSG
