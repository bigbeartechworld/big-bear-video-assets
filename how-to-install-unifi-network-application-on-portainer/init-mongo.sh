#!/bin/bash

mongo <<EOF
use admin
db.auth("unifi", "unifi_password")
use unifi
db.createUser({
  user: "${MONGO_USER}",
  pwd: "${MONGO_PASS}",
  roles: [
    { db: "unifi", role: "dbOwner" },
    { db: "unifi_stat", role: "dbOwner" }
  ]
})
EOF
