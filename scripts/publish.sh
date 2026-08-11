#!/bin/bash

set -e

npm run build

aws s3 sync dist/ s3://cvweb-983971845948-us-east-2-an --delete
