# Kodövning inför lektion 3

Ta hem den här branchen (`prep/lesson-3-exercise`), kopiera över mappen `04-async-todos` till där du har din egna kod för den här kursen.

Öppna mappen i en terminal och kör `npm install` för att installera alla paket.

Starta därefter frontend med `npm run dev` i en terminal och backend med `npm run server` i en annan terminal.

## Steg 1. Hämta todos

Skriv om koden i `src/main.ts` så att den hämtar alla todos från backend och renderar dem i listan. Glöm inte att typa svaret korrekt.

Ni väljer själva om ni vill använda `fetch` eller `axios`.

Om du är osäker på hur du ska göra, kolla på video `3.1. Hämta en todo med fetch` där jag berättar om API:et och visar Postman.

## Steg 2. Lägg till en todo

Skriv om koden i `src/main.ts` så att det skapas en ny todo i API:et när användaren klickar på "Create".

Endpointen för att skapa en todo är `http://localhost:3000/todos` och ni ska göra en `POST`-request.

Igen väljer ni själva om ni vill använda `fetch` eller `axios`.

⚠️ **OBS!** Skicka _inte_ med `id` i payload, backend sköter tilldelning av `id` automatiskt.

Så klart ska listan uppdateras med den nya todo:n när den har skapats.
