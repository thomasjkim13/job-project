#!/bin/bash

# API='http://localhost:4741'
API="https://tranquil-mountain-66305.herokuapp.com"
URL_PATH="/jobs"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "job": {
      "title": "'"${TITLE}"'",
      "company": "'"${COMPANY}"'",
      "level": "'"${LEVEL}"'"
    }
  }'

echo