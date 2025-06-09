## YouTube Video

[![How to install MySQL on Casa OS](https://img.youtube.com/vi/pcMirAEIKL0/0.jpg)](https://www.youtube.com/watch?v=pcMirAEIKL0)

## MySQL Icon

```text
https://github.com/walkxcode/dashboard-icons/blob/main/png/mysql.png?raw=true
```

## Test MySQL

Connect to the MySQL server: Use the mysql command to connect to your MySQL server. Since you've exposed the MySQL port (3306) to your host in the Docker Compose file, you can connect to it using casaos-ip as the host and 3306 as the port number. The following command connects to the MySQL server using the casaos user:

```bash
mysql -h [casaos-ip] -P 3306 -u bigbear -p
```

This will prompt you for the password. Enter the password (password based on your Docker Compose configuration) when prompted.

Show all databases:

```sql
SHOW DATABASES;
```

Use the casaos database (as specified in your Docker Compose):

```sql
USE casaos;
```

List tables in the database:

```sql
SHOW TABLES;
```

Exit the mysql client: You can exit the mysql client using the following command:

```sql
EXIT;
```
