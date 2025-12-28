# 🥯 Wiener Bagel - Vercel Deployment Ready

Diese App ist jetzt für das Deployment auf Vercel vorbereitet!

## 📦 Was wurde geändert?

### Neue Dateien:
- ✅ `vercel.json` - Vercel Konfiguration
- ✅ `api/server.ts` - Serverless Function für Express
- ✅ `VERCEL_DEPLOYMENT.md` - Detaillierte Deployment-Anleitung
- ✅ `.env.example` - Beispiel für Umgebungsvariablen

### Geänderte Dateien:
- ✅ `server/routes.ts` - httpServer ist nun optional
- ✅ `package.json` - `vercel-build` Script hinzugefügt
- ✅ `.gitignore` - Vercel-Dateien hinzugefügt

## 🚀 Schnellstart für Vercel

### 1. Datenbank einrichten
Wähle einen PostgreSQL-Provider:
- **Vercel Postgres** (empfohlen, integriert)
- **Neon.tech** (kostenlos)
- **Supabase** (kostenlos)

### 2. Deploy zu Vercel

#### Option A: Vercel CLI
```bash
npm i -g vercel
vercel login
vercel
```

#### Option B: GitHub Integration
1. Push deinen Code zu GitHub
2. Gehe zu [vercel.com](https://vercel.com)
3. Importiere dein Repository
4. Vercel erkennt automatisch die Konfiguration

### 3. Umgebungsvariablen setzen
Im Vercel Dashboard unter "Settings" → "Environment Variables":
```
DATABASE_URL=postgresql://...
NODE_ENV=production
```

### 4. Datenbank initialisieren
```bash
vercel env pull
npm run db:push
```

## 📖 Detaillierte Anleitung

Lies `VERCEL_DEPLOYMENT.md` für:
- Schritt-für-Schritt Anleitung
- Datenbank-Setup Details
- Troubleshooting
- Best Practices

## 🔧 Lokale Entwicklung

Nichts hat sich für die lokale Entwicklung geändert:
```bash
npm install
npm run dev
```

## ⚠️ Wichtige Hinweise

1. **Datenbank erforderlich**: Setze `DATABASE_URL` in den Vercel Environment Variables
2. **WebSockets**: Funktionieren NICHT auf Vercel Serverless (siehe VERCEL_DEPLOYMENT.md)
3. **Sessions**: Für Production solltest du auf einen externen Session Store umsteigen

## 📚 Ressourcen

- [Vercel Dokumentation](https://vercel.com/docs)
- [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)

---

**Status**: ✅ Deployment Ready für Vercel
