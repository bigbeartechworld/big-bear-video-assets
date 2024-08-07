#!/bin/bash

mongo <<EOF
use unifi
db.createUser({
  user: "unifi",
  pwd: "unifi_password",
  roles: [
    { db: "unifi", role: "dbOwner" },
    { db: "unifi_stat", role: "dbOwner" }
  ]
})
EOF
