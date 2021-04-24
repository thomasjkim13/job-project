#!/bin/sh

API="https://frozen-brook-18979.herokuapp.com"
URL_PATH="/jobs"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
