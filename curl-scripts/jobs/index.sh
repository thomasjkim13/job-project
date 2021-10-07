#!/bin/sh

API="https://tranquil-mountain-66305.herokuapp.com"
URL_PATH="/jobs"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
