## YouTube Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/7aazPEUtW34" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## PostgreSQL Icon

```text
https://github.com/walkxcode/dashboard-icons/blob/main/png/postgres.png?raw=true
```

## Test PostgreSQL

Install psql using docker:

```bash
alias psql="docker run -e POSTGRES_PASSWORD=password -it --rm --name postgresql postgres:15 psql"
```

Connect to the PostgreSQL server: Use the psql command to connect to your PostgreSQL server. Since you've exposed the PostgreSQL port (5432) to your host in the Docker Compose file, you can connect to it using casaos-ip as the host and 5432 as the port number. The following command connects to the PostgreSQL server using the casaos user:

```bash
psql -h [casaos-ip] -p 5432 -U bigbear -W -d casaos
```

This will prompt you for the password. Enter the password (password based on your Docker Compose configuration) when prompted.

Show all databases:

```sql
\l
```

Use the casaos database (as specified in your Docker Compose):

```sql
\c casaos
```

List tables in the database:

```sql
\dt
```

Exit the psql client: You can exit the psql client using the following command:

```sql
\q
```
