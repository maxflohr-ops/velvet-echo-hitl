#!/usr/bin/env bash
set -e
echo "Bootstrapping Velvet Echo HITL starter..."
node -v >/dev/null 2>&1 || { echo "Node not installed."; exit 1; }
if [ ! -f package.json ]; then
  cat > package.json <<'JSON'
{
  "name": "velvet-echo-hitl",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "seed": "node seeds/seed.js"
  }
}
JSON
fi
npm install
echo "Please fill .env.local with your Google OAuth keys and SHEET_ID, then run npm run dev"
