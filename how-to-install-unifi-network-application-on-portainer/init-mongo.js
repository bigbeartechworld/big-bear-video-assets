db.getSiblingDB("unifi").createUser({
  user: "unifi",
  pwd: "unifi_password", // Replace with your actual password
  roles: [
    { role: "dbOwner", db: "unifi" },
    { role: "dbOwner", db: "unifi_stat" }, // Adjust if you need this additional database
  ],
});
