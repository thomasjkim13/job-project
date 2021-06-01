API='https://frozen-brook-18979.herokuapp.com/comments'
URL_PATH='/comments'

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "comment": {
      "title": "'"${TITLE}"'",
      "content": "'"${CONTENT}"'"
      "jobId": "'"${JOB_ID}"'"
    }
  }'

echo