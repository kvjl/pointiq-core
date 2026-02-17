# PointIQ Core

PointIQ Core is a Chrome extension (built with WXT + React) for credit card recommendations.

The goal is to recommend the best credit card to use on a given website.

## Current Status

- UI-only prototype
- No authentication flow yet
- Recommendation logic is in progress

## Prerequisites

- Node.js 18+ (Node.js 20+ recommended)
- npm
- Google Chrome

## Setup

1. Install dependencies:

```bash
npm install
```

2. Update WXT to the latest version:

```bash
npm install -D wxt@latest @wxt-dev/module-react@latest
```

3. Start development mode:

```bash
npm run dev
```

This launches a Chrome development session for testing the extension.

## Useful Scripts

- `npm run dev`: Start WXT dev mode (Chrome)
- `npm run dev:firefox`: Start WXT dev mode (Firefox)
- `npm run build`: Build extension for production
- `npm run zip`: Create a distributable zip
