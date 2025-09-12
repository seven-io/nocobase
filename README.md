# Seven.io SMS Plugin for NocoBase

A NocoBase plugin that integrates [Seven.io](https://seven.io) SMS services for user verification and authentication workflows.

## What it does

This plugin adds Seven.io as an SMS provider option for NocoBase's verification system, enabling you to:

- Send SMS verification codes during user registration
- Send SMS codes for two-factor authentication 
- Send SMS codes for password reset flows
- Use Seven.io's reliable SMS gateway for all verification workflows

## Prerequisites

- NocoBase application (v1.x)
- Seven.io account and API key ([Sign up here](https://seven.io))

## Installation

1. Install the plugin in your NocoBase application:
   ```bash
   npm install @seven.io/plugin-nocobase
   ```

2. Add the plugin to your NocoBase application configuration.

## Configuration

1. **Get your Seven.io API key**:
   - Sign up at [seven.io](https://seven.io)
   - Navigate to your dashboard and copy your API key

2. **Enable the plugin in NocoBase**:
   - Go to your NocoBase admin panel
   - Navigate to Plugin Manager
   - Find "Seven SMS" plugin and enable it

3. **Configure SMS verification settings**:
   - Go to Settings → Verification
   - Select "Seven SMS" as your SMS provider
   - Enter your Seven.io API key
   - Configure other verification settings as needed

## Usage

Once configured, the Seven.io SMS provider will automatically handle SMS sending for:

- User registration verification
- Login verification (if 2FA is enabled)
- Password reset verification
- Any custom verification workflows you've built

## API Configuration

The plugin uses Seven.io's REST API with the following endpoint:
- **URL**: `https://gateway.seven.io/api/sms`
- **Method**: POST
- **Authentication**: API key via `x-api-key` header

## Support

- [Seven.io Documentation](https://docs.seven.io)
- [Seven.io Support](https://seven.io/support)
- [NocoBase Documentation](https://docs.nocobase.com)

## License

This plugin is distributed under the same license as your NocoBase application.
