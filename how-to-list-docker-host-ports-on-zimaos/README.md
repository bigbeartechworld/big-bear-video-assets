## How secure is this?

Mounting `/var/run/docker.sock` inside a container effectively grants it root access on the host system, since the Docker daemon runs with root privileges. This can be a significant security risk because if the container is compromised, an attacker could gain control over the Docker daemon, and thus, the host machine.
