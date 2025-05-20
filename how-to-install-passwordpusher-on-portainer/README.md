## Password Pusher: Self-Hosted Password Sharing Server

[![How to install Password Pusher on Portainer](https://img.youtube.com/vi/xQSz8w6Ee8c/0.jpg)](https://www.youtube.com/watch?v=xQSz8w6Ee8c)

Give your users the tools to be secure by default.

Password Pusher is an open source application to communicate sensitive information over the web. Secret links expire after a certain number of views and/or time has passed.

Hosted at pwpush.com but you can also easily run your own private instance with just a few steps.

- Easy-to-install: Host your own via Docker, a cloud service or just use pwpush.com
- Open Source: No blackbox code. Only trusted, tested and reviewed open source code.
- Versatile: Push passwords, text, files or URLs that auto-expire and self delete.
- Audit logging: Track and control what you've shared and see who has viewed it.
- Encrypted storage: All sensitive data is stored encrypted and deleted entirely once expired.
- Host your own: Database backed or ephemeral, easily run your own instance isolated from the world.
- Admin Dashboard: Manage your self-hosted instance with a built in admin dashboard.
- Logins: Invite your colleagues and track what is pushed and who retrieved it.
- Unbranded delivery page: No logos, superfluous text or unrelated links to confuse end users.
- Internationalized: 29 language translations are bundled in. Easily selectable via UI or URL
- JSON API: Raw JSON API available for 3rd party tools or command line via curl or wget.
- Command line interface: Automate your password distribution with CLI tools or custom scripts.
- Themes: 26 themes bundled in courtesy of Bootswatch. Select with a simple environment variable.
- Customizable: Change text and default options via environment variables.
- Light & dark themes: Via CSS @media integration, the default site theme follows your local preferences.
- Re-Brandable: Completely white label: customize the theme, site name, tagline and logo to fit your environment.
- Custom CSS: Bundle in your own custom CSS to add your own design.

> 10 Years Old: Password Pusher has securely delivered millions and millions of passwords in its 14 year history.
> Actively Maintained: I happily work for the good karma of the great IT/Security community.
> Honest Software: Open source written and maintained by me with the help of some great contributors. No organizations, corporations or evil agendas.

### Installation

1. Ensure Docker and Docker Compose are installed on your system.
2. Clone this repository or download the `docker-compose.yml` file.
3. Run the following command to start the Password Pusher server:
   ```bash
   docker-compose up -d
   ```
4. Access the web UI at `http://localhost:5100`.

### Configuration

- The `docker-compose.yml` file is pre-configured with:
- Port mapping: `5100:5100` (host:container).
- Volume for temporary storage: `big_bear_pwpush_storage`.
- Health checks to ensure service reliability.

### Password Pusher Icon

```text
https://github.com/walkxcode/dashboard-icons/blob/main/png/passwordpusher.png?raw=true
```
