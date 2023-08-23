## YouTube Video

[![How to install Nextcloud and Mariadb on Casa OS](https://img.youtube.com/vi/V2D9y4Qj6a8/0.jpg)](https://www.youtube.com/watch?v=V2D9y4Qj6a8)

## Nextcloud Icon

```text
https://raw.githubusercontent.com/walkxcode/dashboard-icons/12fcfa5321c92b82bdd81a495c4e7648236ab3e0/svg/nextcloud.svg
```

## MariaDB Icon

```text
https://github.com/walkxcode/dashboard-icons/blob/main/png/mariadb.png?raw=true
```

## Test MariaDB

Connect to the MariaDB server: Use the mysql command to connect to your MySQL server. Since you've exposed the MariaDB port (3306) to your host in the Docker Compose file, you can connect to it using casaos-ip as the host and 3306 as the port number. The following command connects to the MySQL server using the casaos user:

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
