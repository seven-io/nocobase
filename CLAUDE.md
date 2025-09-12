# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a NocoBase plugin that integrates Seven.io SMS services for verification functionality. It's a NocoBase server-side plugin that registers a custom SMS provider with the NocoBase verification system.

## Architecture

The plugin follows the NocoBase plugin architecture:

- **Server Plugin**: `src/server/plugin.ts` - Main plugin class that extends NocoBase's Plugin class
- **Entry Points**: 
  - `src/index.ts` - Main export that re-exports server components
  - `src/server/index.ts` - Server-specific exports
- **Client Integration**: `src/client/locale.ts` - Client-side internationalization utilities
- **Localization**: `src/locale/` - Translation files (currently empty)

## Key Components

### SevenSMSProvider Class
Located in `src/server/plugin.ts:7-30`. Extends NocoBase's SMSProvider to integrate with Seven.io API:
- Requires `apiKey` configuration
- Sends SMS via Seven.io REST API endpoint
- Integrates with NocoBase verification system

### PluginSevenServer Class
Located in `src/server/plugin.ts:32-43`. Main plugin class that:
- Registers the Seven SMS provider with NocoBase's verification plugin
- Uses provider name 'seven' for client-server coordination

## Development

This is a TypeScript plugin that compiles to JavaScript. The build output goes to `dist/` directory:
- Client code: `dist/client/index.js`
- Server code: `dist/server/index.js`

The plugin depends on NocoBase core packages:
- `@nocobase/client` - Client-side framework
- `@nocobase/server` - Server-side framework  
- `@nocobase/test` - Testing utilities

## Plugin Registration

The plugin registers with NocoBase's verification system using the identifier 'seven'. This must match the client-side configuration for proper integration.