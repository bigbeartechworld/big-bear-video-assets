# Big Bear Video Assets

This repository contains installation guides and Docker Compose files for various self-hosted applications across different platforms.

## Supported Platforms

- **[Casa-Os](./casa-os/)** - 19 applications
- **[Cosmos-Cloud](./cosmos-cloud/)** - 9 applications
- **[Dockge](./dockge/)** - 62 applications
- **[Portainer](./portainer/)** - 58 applications
- **[Proxmox-Ubuntu](./proxmox-ubuntu/)** - 3 applications
- **[Runtipi](./runtipi/)** - 2 applications

## Structure

Each platform directory contains subdirectories for individual applications with:
- `docker-compose.yml` - Docker Compose configuration
- `README.md` - Installation instructions and notes

## Contributing

When adding new installation guides, please follow the existing structure:
```
platform/
└── app-name/
    ├── docker-compose.yml
    └── README.md
```
