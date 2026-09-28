This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# ve.ra-costruzioni

## Docker

Build immagine:

```bash
docker build -t vera-construzioni .
```

Run container:

```bash
docker run -p 3000:3000 vera-construzioni
```

Oppure con Docker Compose:

```bash
docker compose up --build
```

## Deploy su UGREEN NAS (Docker)

Prerequisiti:

- UGREEN NAS con Docker attivo
- Porta `3000` libera (o porta alternativa)

### Opzione A (consigliata): Docker Compose su NAS

1. Copia il progetto nel NAS (es. in una cartella `vera-construzioni`).
2. Apri il terminale del NAS nella cartella progetto.
3. Avvia build e deploy:

```bash
docker compose up -d --build
```

4. Verifica che il container sia in esecuzione:

```bash
docker compose ps
```

5. Apri il sito da browser:

- `http://IP_DEL_NAS:3000`

### Opzione B: solo Docker

1. Build:

```bash
docker build -t vera-construzioni:latest .
```

2. Run:

```bash
docker run -d --name vera-construzioni-web --restart unless-stopped -p 3000:3000 vera-construzioni:latest
```

3. Apri `http://IP_DEL_NAS:3000`.

### Aggiornamento versione sul NAS

Quando aggiorni il codice:

```bash
docker compose down
docker compose up -d --build
```

### Note utili

- Se usi reverse proxy (Nginx/Traefik), punta al servizio `web:3000`.
- Per HTTPS pubblico, termina TLS sul reverse proxy del NAS.

## Deploy automatico su Vercel da GitHub (main)

1. Vai su Vercel e fai login.
2. Clicca **Add New... → Project**.
3. Importa il repository GitHub `johnmukenge/ve.ra-costruzioni`.
4. Framework Preset: **Next.js** (auto).
5. Branch di produzione: **main**.
6. Clicca **Deploy**.

Dopo il collegamento:

- ogni push su `main` farà un deploy Production automatico;
- ogni PR/branch farà un deploy Preview automatico.

Se vuoi limitare il deploy solo a `main`, in Vercel imposta regole branch in **Settings → Git**.
