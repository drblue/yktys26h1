# Övning inför livepass 10

Utgå från **din egen väderapp**. Kör kvalitetskontrollerna och publicera appen som i video 10.2. Kursens exempel finns i [05-weather](./05-weather/) på branchen `prep/lesson-10-2-end`.

## 1. Installera verktygen och kör kvalitetskontrollen

Öppna en terminal i väderappens mapp, där `package.json` ligger. Installera verktygen med samma versioner som i kursens exempel:

```sh
npm i -D -E type-coverage@2.31.2 oxlint@1.94.0 oxlint-tsgolint@7.0.2007
```

Lägg till följande fyra kommandon under `scripts` i `package.json`. Behåll dina befintliga kommandon för `dev`, `build` och `preview`. Sätt ett kommatecken mellan varje kommando.

```json
"check": "tsc -b",
"lint": "oxlint --type-aware --deny-warnings src",
"quality": "npm run lint && npm run check && npm run type-coverage",
"type-coverage": "type-coverage --project tsconfig.json --detail --at-least 99"
```

Kör `npm run quality`. Kommandot kör först linting, sedan typkontroll och sist en kontroll av att typtäckningen är minst 99 %. Om en kontroll misslyckas, läs det första felmeddelandet, rätta felet och kör igen.

## 2. Bygg och publicera väderappen på Netlify

Om appen använder en miljövariabel för väder-API:t, se till att den är satt där appen byggs. Kör sedan:

```sh
npm run build
npm run preview
```

Öppna adressen som `preview` visar och sök efter en stad. Bygg om appen om du ändrar miljövariabeln.

Skapa ett konto på [Netlify](https://app.netlify.com/signup) eller logga in om du redan har ett konto. Följ instruktionerna i **video 10.2** för att publicera din väderapp på Netlify. Om du laddar upp bygget manuellt finns filerna i `dist`.

## Kontrollera och ta med

- Öppna appens publika Netlify-länk på mobilen och sök efter en stad. Kontrollera att appen visar vädret för rätt plats.
- Ta med länken till livepasset. Om något inte fungerar ännu, ta med felmeddelandet eller beskriv var du fastnade.

Övningen är inte betygsgrundande.
