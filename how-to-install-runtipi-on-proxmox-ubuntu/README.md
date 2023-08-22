## Install Ubuntu

```bash
bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/ct/ubuntu.sh)"
```

## Install runtipi

Once you have the LXC up you need to go into the console and paste the following command:

```bash
bash -c "$(wget -qLO - https://raw.githubusercontent.com/bigbeartechworld/big-bear-scripts/master/runtipi/install.sh)"
```

## runtipi commands

Start runtipi:

```bash
sudo /opt/runtipi/scripts/start.sh
```

Stop runtipi:

```bash
sudo /opt/runtipi/scripts/stop.sh
```

Update runtipi:

```bash
sudo /opt/runtipi/scripts/update.sh
```

## Start on system boot

```bash
sudo /opt/runtipi/scripts/startup.sh
```
