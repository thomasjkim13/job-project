#!/bin/bash

API="http://localhost:4741"
URL_PATH="/create"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "jobs": {
      "title": "'"${TITLE}"'",
      "company": "'"${COMPANY}"'",
      "experience_level": "'"${LEVEL}"'"
    }
  }'

echo