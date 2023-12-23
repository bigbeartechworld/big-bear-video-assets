## YouTube Video

## Test Redis

```bash
alias redis="docker run -it --rm redis:latest redis-cli -h [DOCKGE-IP] -p 6379 -a password"
```

Run ping:

```bash
ping
```

Result should be:

```bash
PONG
```
