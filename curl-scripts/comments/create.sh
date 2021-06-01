# API='http://localhost:4741'
API="https://frozen-brook-18979.herokuapp.com"
URL_PATH="/comments"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "comment": {
      "content": "'"${CONTENT}"'",
      "jobId": "'"${JOB_ID}"'"
    }
  }'

echo