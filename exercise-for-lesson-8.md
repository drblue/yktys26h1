# Övning inför livepass 8

Se filmerna **8.1 Prisma och TypeScript** och **8.2 Typer genom hela appen**. Utgå från din kod efter filmerna. Motsvarande kod finns på branchen `prep/lesson-8-2-end`.

Öppna `08-node-prisma-books` i en terminal. Kör `npm ci` om du behöver installera paketen och `npm run db:setup` om du inte har förberett databasen. Starta API:t med `npm run dev` och kontrollera att `GET http://localhost:3001/books` visar boklistan i Postman.

## 1. Ändra en bok

Lägg till **PATCH `/books/:id`** så att det går att rätta en titel eller ett sidantal. Använd samma uppdelning som för `POST /books`.

- Koppla `PATCH` till en ny controller-funktion i `books.router.ts`.
- Läs id från `req.params` och kontrollera att det är ett positivt heltal. Läs request body som `unknown`. Ett anrop kan innehålla `title`, `pages` eller båda. Kontrollera de fält som skickas och använd samma regler för titel och sidantal som vid POST. Skicka bara de validerade fälten vidare till servicen.
- Härled en typ för ändring från `CreateBookPayload`. `Partial` kan vara till hjälp. Lägg till en funktion i `books.service.ts` som tar emot id och de fält som ska ändras och uppdaterar boken med Prisma. [Prisma-guiden för att uppdatera en post](https://www.prisma.io/docs/orm/v7/prisma-client/queries/crud#update-a-single-record)

Svara med **HTTP 200** och den uppdaterade boken. Svara med **HTTP 400** om id eller request body är ogiltig, till exempel om inget fält skickades. Svara med **HTTP 404** om boken saknas. Använd ett JSON-objekt med `message` för felsvaren.

## 2. Radera en bok

Lägg till **DELETE `/books/:id`**. Koppla routern till en controller som kontrollerar id på samma sätt som för PATCH. Lägg till en service-funktion som raderar boken med det id:t. [Prisma-guiden för att radera en post](https://www.prisma.io/docs/orm/v7/prisma-client/queries/crud#delete-a-single-record)

Svara med **HTTP 204** utan body när boken raderats. Använd **HTTP 400** för ogiltigt id och **HTTP 404** när boken saknas.

## Kontrollera och ta med

- Skapa en egen testbok med 180 sidor med POST i Postman. Använd id:t från svaret när du testar PATCH och DELETE.
- Skicka `{"pages":240}` med PATCH. Kontrollera att sidantalet ändras och att titeln är kvar. Prova sedan `{"pages":"240"}` och kontrollera att du får 400.
- Radera testboken. Kontrollera att svaret är 204 och att boken har försvunnit från `GET /books`. Prova sedan PATCH och DELETE med samma id igen. Båda ska svara med 404. Prova också id `abc` och kontrollera att båda svarar med 400.
- Kör `npm run check` i API-mappen. Ta med din kod och förbered en kort förklaring av hur du typar och validerar en ändring där bara ett fält skickas.

Testa i Postman. React-kopplingen bygger vi vidare på under livepasset. Om något inte fungerar ännu, ta med ditt försök och beskriv var du fastnade. Övningen är inte betygsgrundande.
