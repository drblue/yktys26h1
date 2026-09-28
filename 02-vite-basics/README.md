# Vite TypeScript Basics

## Skapa en ny Vite-app med `vanilla-ts` som template

```bash
npm create vite@latest 02-vite-basics -- --template vanilla-ts
```

Svara `No` på "Install with npm and start now".
Följ sedan instruktionerna om att gå in i mappen och köra `npm install`. Därefter öppna mappen i
VSCode's inbyggda terminal och kör där `npm run dev`.

Jag har tagit raderat följande filer:

```
public/icons.svg
src/assets
src/
  counter.ts
  style.css
```

Samt tömt `main.ts` på innehåll.
