#!/bin/bash

API="https://frozen-brook-18979.herokuapp.com"
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
      "experienceLevel": "'"${LEVEL}"'"
    }
  }'

echo