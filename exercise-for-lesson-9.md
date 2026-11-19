# Övning inför livepass 9

Se filmerna **9.1 Kodkvalitet** och **9.2 Tester och AI**. Utgå från din kod efter filmerna. Motsvarande kod finns på branchen `prep/lesson-9-2-end`. Räkna med cirka 20 minuter.

Öppna `08-node-prisma-books` i en terminal. Om du börjar med en ny kopia, kör `npm ci` och sedan `npx prisma generate` för att skapa Prisma-klienten. Kör `npm run check` och `npm test` så att du ser att typkontrollen och testerna går igenom innan du börjar.

## 1. Hitta och rätta ett typfel

Öppna `src/controllers/books.controller.ts`. Ändra tillfälligt `updatePayload.pages = pages` till `updatePayload.pages = String(pages)` i `updateBook`. Kör `npm run check` och läs felmeddelandet. Vilken typ har värdet du försöker tilldela och vilken typ förväntas? Rätta felet och kör typkontrollen igen.

## 2. Komplettera testerna med AI-stöd

Läs `src/guards/isUpdateBookPayload.ts` och de befintliga testerna i `test/update-book.test.ts`. Ge AI-verktyget båda filerna och kraven för PATCH i [övning 8](./exercise-for-lesson-8.md). Fråga till exempel:

> Vilken ogiltig PATCH-body saknar vi ett test för? Ge ett konkret exempel och förklara varför de befintliga testerna inte täcker det.

- Jämför förslaget med testerna och kraven. Hör kontrollen hemma i guarden eller görs den senare i `updateBook`?
- Välj ett fall som guarden ska avvisa och som saknas i testerna. Lägg till det i testfilen och kör `npm test`.

## Kontrollera och ta med

- Ändra tillfälligt guarden så att den släpper igenom just den body du valde. Kör `npm test` och kontrollera att ditt nya test faller. Återställ guarden, behåll testet och kör testerna igen.
- Ta med ditt test till livepasset. Visa vilken body du valde, varför den ska avvisas och vilket fel testet upptäckte.

Om något inte fungerar ännu, ta med ditt försök och beskriv var du fastnade. Övningen är inte betygsgrundande.
