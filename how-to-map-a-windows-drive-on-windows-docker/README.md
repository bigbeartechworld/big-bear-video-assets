## Disclaimer

I don't use windows just wanted to try to help.

## Share the Drive with Docker:

- Right-click the Docker icon in the system tray.
  Go to Settings.
- Navigate to Resources > File Sharing.
  Check the box next to the drive you want to share (in your case, the D drive).
- Click on Apply & Restart.

## Map the Drive to the Container:

When you run a container, you can map volumes from your machine to the container. For Sonarr, Radarr, and other such applications, you'd do this to ensure they can access your media and configuration folders. Here's an example using docker run:

```
docker run -d \
  -v D:/path/on/host:/path/in/container \
  --name=sonarr \
  sonarr-image-name
```

In this command:

- `D:/path/on/host` represents the path to the directory on your D drive you want to share.
- `/path/in/container` is where that directory will appear inside the container. Applications within the container will access your D drive data from this path.

## Permissions:

Ensure that the user the container runs as has appropriate permissions to access and modify the data in the D drive. This might require adjusting permissions on the host or specifying a user in your container configuration.

## Docker-Compose:

If you are using docker-compose to manage your containers (which is common for setups with multiple interconnected services like Sonarr, Radarr, and Plex), you'd set up volume mappings in your docker-compose.yml file:

```
services:
    sonarr:
        image: sonarr-image-name
        volumes: - D:/path/on/host:/path/in/container
```

Network Considerations:

If you're running Plex and these other services in Docker, consider setting them up on the same Docker network for easy communication between containers.

## Sharing a Folder on Windows:

On the Main Machine (Server):

a. Locate the folder you wish to share (for instance, the D drive or a specific folder on it).

b. Right-click on the folder and select Properties.

c. Go to the Sharing tab and click on Advanced Sharing.

d. Check the box that says Share this folder.

e. Assign a Share name for the folder.

f. Click on Permissions to specify which users or groups can access this shared folder. You can provide read or full control permissions based on your needs.

g. Click OK to confirm the settings.

On the Other Machines (Clients):

a. Open File Explorer.

b. In the address bar, type in the network address of the main machine followed by the share name you've assigned. It would look something like \\ServerPCName\ShareName.

c. You should now be able to access the shared folder. You may be prompted for a username and password; this will be an account that has access rights on the main machine.

## Considerations:

Permissions: Ensure you set permissions appropriately. If you grant "Everyone" access, it might expose the files to all users on the network. Always be cautious.

Network Discovery: Ensure that all machines have Network Discovery turned on. This allows PCs to find each other on the same network.

Static IP or Hostname: For consistent access, consider setting a static IP for the main machine or using a consistent hostname.

Firewall Settings: Ensure the Windows Firewall or any other third-party firewall software you're using allows for file and printer sharing.

Drive Mapping: On client machines, you can map the shared folder as a network drive for easier access. Right-click on This PC or Computer in File Explorer, choose Map network drive, and provide the path to the shared folder.
