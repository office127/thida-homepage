# Deployment Guide for Nuxt 4 Upgrade

## Upgrade Summary
- Upgraded from Nuxt 3.x to Nuxt 4.1.2
- Updated dependencies (`@nuxtjs/tailwindcss`, TypeScript, Node types, icons)
- Ensured build output via `npm run build`
- Maintained SPA deployment on Apache with `.htaccess`

## Commands
### Install dependencies
```bash
npm install
```

### Development server
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

### Generate static site
```bash
npm run generate
```

### Deploy to production via FTP
```bash
npm run deploy:production
```

## Configuration Changes
- `nuxt.config.ts` updated for Nuxt 4
- `nitro.preset` set to `node-server`
- `prerender.crawlLinks` enabled

## Apache Deployment
Ensure `.htaccess` is uploaded to the web root with:
- HTTPS enforcement
- SPA fallback
- CSP headers
- Caching rules

## Post-Upgrade Checklist
- [x] Run `npm run build`
- [ ] Test `npm run dev`
- [ ] Verify production deployment
- [ ] Review logs for errors

## Notes
- `useTranslations` composable remains compatible
- Hydration mismatch fixes retained
- SSR disabled for SPA hosting
