# MetaPulse Website

Multi-page website for MetaPulse ecosystem: AI-powered market intelligence, Launchpad, and NeuraLinker Blockchain.

## Structure

- `index.html` - MetaPulse AI landing page (Home)
- `launchpad.html` - MetaPulse Launchpad page
- `neuralinker.html` - NeuraLinker Blockchain page
- `package.json` - Dependencies and scripts for Railway deployment
- `railway.json` - Railway deployment configuration

## Deployment on Railway

1. Connect your GitHub repository to Railway
2. Railway will automatically detect the Node.js project
3. The app will be served using `npx serve` on the PORT environment variable
4. All HTML files will be served as static files

## Local Development

```bash
npm start
```

Or open any HTML file directly in a browser.

## Pages

- **Home** (`index.html` or `/`) - MetaPulse AI landing page
- **Launchpad** (`launchpad.html` or `/launchpad.html`) - Token launching platform
- **NeuraLinker** (`neuralinker.html` or `/neuralinker.html`) - Blockchain information

## Navigation

Navigation links in the header allow switching between pages. Each page is a separate HTML file.

