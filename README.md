<p align="center">
  <img src="https://www.seven.io/wp-content/uploads/Logo.svg" width="250" alt="seven logo" />
</p>

<h1 align="center">seven SMS for NocoBase</h1>

<p align="center">
  Plug seven into <a href="https://www.nocobase.com/">NocoBase</a> as an SMS provider for user verification, 2FA and password-reset flows.
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-teal.svg" alt="MIT License" /></a>
  <img src="https://img.shields.io/badge/NocoBase-1.x-blue" alt="NocoBase 1.x" />
  <a href="https://www.npmjs.com/package/@seven.io/plugin-nocobase"><img src="https://img.shields.io/npm/v/@seven.io/plugin-nocobase" alt="npm" /></a>
</p>

---

## Features

- **Registration Verification** - SMS code on signup
- **Two-Factor Authentication** - SMS-based 2FA codes
- **Password Reset** - Verification codes for the reset flow
- **Custom Workflows** - Reusable across any custom verification you build in NocoBase

## Prerequisites

- A [NocoBase](https://www.nocobase.com/) 1.x installation
- A [seven account](https://www.seven.io/) with API key ([How to get your API key](https://help.seven.io/en/developer/where-do-i-find-my-api-key))

## Installation

```bash
npm install @seven.io/plugin-nocobase
```

Register the plugin with your NocoBase application config.

## Configuration

1. Open the NocoBase admin and go to **Plugin Manager**.
2. Find *Seven SMS* and enable it.
3. Open **Settings > Verification**.
4. Pick *Seven SMS* as the SMS provider.
5. Paste your seven API key.

## Architecture

The plugin registers a custom `SMSProvider` (identifier `seven`) with NocoBase's verification subsystem. Sends are dispatched against:

```
POST https://gateway.seven.io/api/sms
x-api-key: <your seven API key>
```

## Support

Need help? Feel free to [contact us](https://www.seven.io/en/company/contact/) or [open an issue](https://github.com/seven-io/nocobase/issues).

## License

[MIT](LICENSE)
