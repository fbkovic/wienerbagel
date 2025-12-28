# Vercel Deployment für Wiener Bagel

Diese App ist nun für Vercel konfiguriert.

## 🚀 Deployment Schritte

### 1. Datenbank einrichten

Du hast mehrere Optionen für die PostgreSQL-Datenbank:

#### Option A: Vercel Postgres (empfohlen)
1. Gehe zu deinem Vercel Dashboard
2. Klicke auf "Storage" → "Create Database" → "Postgres"
3. Nach Erstellung bekommst du automatisch eine `DATABASE_URL`

#### Option B: Neon (kostenlos verfügbar)
1. Besuche [Neon.tech](https://neon.tech)
2. Erstelle ein kostenloses Konto
3. Erstelle eine neue Datenbank
4. Kopiere die Connection String

#### Option C: Supabase (kostenlos verfügbar)
1. Besuche [Supabase.com](https://supabase.com)
2. Erstelle ein kostenloses Projekt
3. Gehe zu Settings → Database
4. Kopiere die "Connection string" (Transaction Pool Mode)

### 2. Vercel Projekt einrichten

#### Via Vercel CLI (schneller):
```bash
# Installiere Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel
```

#### Via Vercel Dashboard:
1. Gehe zu [vercel.com](https://vercel.com)
2. Klicke auf "Add New..." → "Project"
3. Importiere dein Git Repository (GitHub/GitLab/Bitbucket)
4. Vercel erkennt automatisch die Konfiguration

### 3. Umgebungsvariablen setzen

Füge diese Environment Variables in Vercel hinzu:

```
DATABASE_URL=postgresql://user:password@host:port/database
NODE_ENV=production
```

**Wichtig:** Die `DATABASE_URL` muss auf eine externe PostgreSQL-Datenbank zeigen!

### 4. Datenbank-Schema deployen

Nach dem ersten Deployment:

```bash
# Setze DATABASE_URL lokal (temporär)
export DATABASE_URL="deine-vercel-postgres-url"

# Push das Schema
npm run db:push
```

Alternativ kannst du das auch über die Vercel CLI machen:
```bash
vercel env pull
npm run db:push
```

## 📋 Wichtige Änderungen

### Neue Dateien:
- `vercel.json` - Vercel Konfiguration
- `api/server.ts` - Serverless Function Handler
- `VERCEL_DEPLOYMENT.md` - Diese Anleitung

### Geänderte Dateien:
- `server/routes.ts` - httpServer ist jetzt optional
- `package.json` - Build-Scripts angepasst

## 🔧 Entwicklung

Lokal kannst du weiterhin wie gewohnt entwickeln:

```bash
npm run dev
```

## 🌐 Build & Test

Teste den Production Build lokal:

```bash
npm run build
npm start
```

## 📝 Hinweise

### Session Storage
- Die aktuelle Session-Konfiguration verwendet `memorystore`, was in Serverless-Umgebungen nicht funktioniert
- Für Production solltest du auf einen externen Session Store umsteigen:
  - Vercel KV (Redis)
  - Upstash Redis
  - PostgreSQL Session Store (connect-pg-simple)

### WebSockets
- WebSockets funktionieren auf Vercel **nicht** in Serverless Functions
- Falls du WebSockets brauchst, musst du:
  - Einen separaten WebSocket-Server hosten (z.B. auf Railway, Fly.io)
  - Oder auf einen Managed Service wie Pusher, Ably umsteigen

### Datei-Uploads
- Das `/tmp` Verzeichnis in Serverless Functions ist nur 512MB groß
- Für Datei-Uploads nutze Cloud Storage: Vercel Blob, Cloudinary, etc.

## 🐛 Troubleshooting

### Build schlägt fehl
- Prüfe die Build Logs in Vercel
- Stelle sicher, dass alle Dependencies in `package.json` stehen

### Datenbank-Verbindungsfehler
- Prüfe ob `DATABASE_URL` korrekt gesetzt ist
- Stelle sicher, dass die Datenbank von außen erreichbar ist
- Check ob das Schema mit `npm run db:push` deployed wurde

### API Routen funktionieren nicht
- Prüfe die Vercel Function Logs
- Stelle sicher, dass die Routes in `vercel.json` korrekt sind

## 📚 Weitere Ressourcen

- [Vercel Dokumentation](https://vercel.com/docs)
- [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)
- [Drizzle ORM Vercel Guide](https://orm.drizzle.team/docs/get-started-postgresql#vercel-postgres)
