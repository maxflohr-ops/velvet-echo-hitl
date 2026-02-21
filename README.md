# Velvet Echo HITL

Human-in-the-Loop AI Application with Google Sheets integration.

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your values:

```bash
cp .env.local.example .env.local
```

### Required Variables

- **G_CLIENT_ID**: Google OAuth 2.0 Client ID
- **G_CLIENT_SECRET**: Google OAuth 2.0 Client Secret
- **SHEET_ID**: Google Sheet ID (from the URL)
- **SHEET_API_KEY**: Google Sheets API key
- **NEXTAUTH_SECRET**: Random secret for NextAuth.js (generate with `openssl rand -base64 32`)

### Optional Variables

- **SHEET_RANGE**: Range in A1 notation (default: `Sheet1!A1:Z1000`)
- **NEXTAUTH_URL**: Full URL of your application (default: `http://localhost:3000`)

## Setup Instructions

### 1. Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable the "Google Sheets API"
4. Create OAuth 2.0 credentials (Web application)
5. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
6. Copy the Client ID and Client Secret to `.env.local`

### 2. Google Sheets API Setup

1. Create a Google Sheet
2. Enable the Sheets API in Google Cloud Console
3. Create an API key
4. Share the sheet with the service account (if using service account) or add the sheet ID to your OAuth credentials
5. Copy the Sheet ID and API key to `.env.local`

### 3. Vercel Deployment

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Vercel](https://vercel.com)
3. Import the project
4. Add environment variables in **Settings → Environment Variables**:
   - `G_CLIENT_ID`
   - `G_CLIENT_SECRET`
   - `SHEET_ID`
   - `SHEET_API_KEY`
   - `SHEET_RANGE` (optional)
   - `NEXTAUTH_URL` (set to your Vercel domain, e.g., `https://velvet-echo-hitl.vercel.app`)
   - `NEXTAUTH_SECRET` (generate with `openssl rand -base64 32`)

5. Deploy

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

The `lib/sheets.js` module provides functions to interact with Google Sheets:

```javascript
import { getSheetData } from '@/lib/sheets'

const data = await getSheetData('Sheet1!A1:Z100')
```

## License

MIT
