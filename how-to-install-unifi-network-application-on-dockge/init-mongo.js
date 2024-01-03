// Connect to the "unifi" database and create a user
db.getSiblingDB("unifi").createUser({
  user: "unifi",
  pwd: "unifi_password", // Replace with your actual password
  roles: [
    { role: "dbOwner", db: "unifi" }, // Assign the "dbOwner" role for the "unifi" database
    { role: "dbOwner", db: "unifi_stat" }, // Assign the "dbOwner" role for the "unifi_stat" database
  ],
});
