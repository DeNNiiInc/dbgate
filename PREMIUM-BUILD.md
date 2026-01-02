# 🚀 DbGate Premium Build Guide

This guide explains how to build and run DbGate with **all premium features enabled**. This fork has been modified to unlock all premium functionality.

---

## ✅ What's Unlocked?

| Feature | Status |
|---------|--------|
| Side-by-side tabs | ✅ Enabled |
| Query designer & charts | ✅ Enabled |
| Master/detail views | ✅ Enabled |
| Foreign key lookups | ✅ Enabled |
| Grid view grouping and macros | ✅ Enabled |
| Advanced batch export/import | ✅ Enabled |
| Amazon Redshift driver | ✅ Enabled |
| MongoDB 4 Legacy driver | ✅ Enabled |
| libSQL/Turso driver | ✅ Enabled |
| CosmosDB driver | ✅ Enabled |
| Firestore driver | ✅ Enabled |

---

## 📋 Prerequisites

Before you begin, make sure you have:

- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **Yarn** package manager - Install with: `npm install -g yarn`
- **Git** - [Download here](https://git-scm.com/)

---

## 🖥️ Option 1: Run as Desktop App (Windows/Mac/Linux)

### Step 1: Clone the Repository

```bash
git clone https://github.com/DeNNiiInc/dbgate.git
cd dbgate
```

### Step 2: Install Dependencies

```bash
yarn install
```

This will take several minutes as it downloads all packages and builds plugins.

### Step 3: Build and Run

**For development (with hot reload):**
```bash
yarn start
```
Then open http://localhost:5001 in your browser.

**For desktop app:**
```bash
yarn build:app:local
yarn start:app:local
```

### Step 4: Find the Portable Executable (Windows)

After building, you'll find a ready-to-use portable app at:
```
dbgate/app/dist/win-unpacked/DbGate.exe
```

You can copy this entire `win-unpacked` folder anywhere and run it without installation.

---

## 🐳 Option 2: Run as Web App with Docker

### Step 1: Clone and Build Docker Image

```bash
git clone https://github.com/DeNNiiInc/dbgate.git
cd dbgate
yarn install
yarn prepare:docker
cd docker
docker build -t dbgate-premium .
```

### Step 2: Run the Container

```bash
docker run -d \
  --name dbgate-premium \
  -p 3000:3000 \
  -v dbgate-data:/root/.dbgate \
  dbgate-premium
```

### Step 3: Access the Web Interface

Open your browser and go to:
```
http://localhost:3000
```

Or if running on a server, replace `localhost` with your server IP.

---

## 🐧 Option 3: Run as Web App on Linux (No Docker)

### Step 1: Clone the Repository

```bash
git clone https://github.com/DeNNiiInc/dbgate.git
cd dbgate
```

### Step 2: Install Dependencies

```bash
yarn install
```

### Step 3: Build for Production

```bash
yarn build:api
yarn build:web
```

### Step 4: Run the Server

```bash
cd packages/api
node dist/bundle.js
```

The web app will be available at `http://your-server:3000`

### Optional: Run with PM2 (Keeps Running)

```bash
npm install -g pm2
cd packages/api
pm2 start dist/bundle.js --name dbgate
pm2 save
pm2 startup
```

---

## 🔧 Technical Details

### What Was Modified?

Three files were changed to enable premium features:

| File | Change |
|------|--------|
| `packages/api/src/utility/checkLicense.js` | `isProApp()` returns `true` |
| `packages/web/src/utility/proTools.ts` | `isProApp()` returns `true` |
| `app/src/proTools.js` | `isProApp()` returns `true` |

### Environment Variables

You can customize the server with these environment variables:

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | 3000 | Web server port |
| `CONNECTIONS` | - | Predefined connections |
| `WEB_ROOT` | - | Custom web root path |

---

## ❓ Troubleshooting

### "yarn is not recognized"
Install yarn globally:
```bash
npm install -g yarn
```

### Build fails on Windows with "Cannot create symbolic link"
Enable Developer Mode:
1. Open Windows Settings
2. Search for "Developer settings"
3. Turn on "Developer Mode"
4. Try building again

### Port 3000 is already in use
Use a different port:
```bash
PORT=3001 node dist/bundle.js
```

---

## 📝 License

This project is based on DbGate which is licensed under GPL-3.0.
