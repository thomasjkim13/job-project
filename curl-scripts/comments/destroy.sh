API="https://frozen-brook-18979.herokuapp.com"
URL_PATH="/comments"

curl "${API}${URL_PATH}/${COMMENT_ID}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "comment": {
      "jobId": "'"${JOB_ID}"'"
    }
  }'