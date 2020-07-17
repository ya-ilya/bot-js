#!/bin/bash

WEBHOOK_URL="https://discordapp.com/api/webhooks/733754791636893816/OmucpgEk-cAXOhnUGzQhrLqffoQ5j7JlNSSMnaZFywlnyapcPMrlzsitwyXCG5eZdz-3"
JSON="{\"content\": \"test\"}"

curl -d "$JSON" -H "Content-Type: application/json" "$WEBHOOK_URL"
