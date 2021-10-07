#!/bin/bash

API="https://tranquil-mountain-66305.herokuapp.com"
URL_PATH="/jobs"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo