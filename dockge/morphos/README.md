## Morphos: Self-Hosted File Conversion Server

<!-- [![Morphos Tutorial](https://img.youtube.com/vi/fu60xDXPcPE/0.jpg)](https://youtu.be/fu60xDXPcPE) -->

### Overview

Today, we are forced to rely on third-party services to convert files to other formats. This poses a serious threat to our privacy, especially when handling files containing highly sensitive personal data. Such services could misuse our data, intentionally or unintentionally, and compromise our security.

**Morphos** aims to solve this problem by providing a self-hosted server for private file conversion. With Morphos, you retain full control over your data, ensuring it never leaves your environment. The project includes a user-friendly web interface for seamless conversions.

### Current Features

- **Image Conversion**: Convert images between various formats privately.
- **Self-Hosted**: No reliance on third-party services; your data stays on your server.
- **Web UI**: Easy-to-use interface for managing conversions.

### Future Features

- **Document Conversion**: Support for converting documents (coming soon).

### Installation

1. Ensure Docker and Docker Compose are installed on your system.
2. Clone this repository or download the `docker-compose.yml` file.
3. Run the following command to start the Morphos server:
   ```bash
   docker-compose up -d
   ```
4. Access the web UI at `http://localhost:8080`.

### Configuration

- The `docker-compose.yml` file is pre-configured with:
  - Port mapping: `8080:8080` (host:container).
  - Volume for temporary storage: `big_bear_morphos_tmp`.
  - Health checks to ensure service reliability.

### Notes

- For now, Morphos only supports image conversion. Document support will be added in future updates.
- Ensure your server meets the resource requirements for file conversion tasks.

### Morphos Icon

```text
https://github.com/walkxcode/dashboard-icons/blob/main/png/morphos.png?raw=true
```
