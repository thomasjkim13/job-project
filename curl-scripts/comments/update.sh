API="https://frozen-brook-18979.herokuapp.com"
URL_PATH="/comments"

curl "${API}${URL_PATH}/${COMMENT_ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "comment": {
      "content": "'"${CONTENT}"'",
      "jobId": "'"${JOB_ID}"'"
    }
  }'

  echo