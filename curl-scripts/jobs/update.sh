#!/bin/bash

API="https://tranquil-mountain-66305.herokuapp.com"
URL_PATH="/jobs"

curl "${API}${URL_PATH}/${ID}" \
--include \
--request PATCH \
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