#!/bin/bash

API="https://frozen-brook-18979.herokuapp.com"
URL_PATH="/jobs"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo