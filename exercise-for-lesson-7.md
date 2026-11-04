# Övning inför livepass 7

Se filmerna **7.1 Node och Express** och **7.2 Kodstruktur**. Utgå från din Express-app från filmerna. Motsvarande kod finns i `07-node-express` på branchen `prep/lesson-7-2-end`.

Öppna appens mapp i en terminal, kör `npm ci` och starta servern med `npm run dev`. Kontrollera att `http://localhost:3001/todos` visar todo-listan.

## 1. Följ det befintliga anropet

Följ hur `GET /todos` går genom router, controller och service i videokoden:

- Var kopplas metoden och sökvägen till rätt handler?
- Var hämtas todo-listan, och varför använder controllern `await`?
- Var skickas HTTP-svaret?

Du behöver inte ändra koden i detta steg. Använd samma uppdelning när du bygger nästa endpoint.

## 2. Hämta en enskild todo

Läs sektionen **[Route Parameters i Express Routing-guide](https://expressjs.com/en/5x/guide/routing/#route-parameters)**. Se hur en parameter anges i sökvägen och hur du läser den med `req.params`.

Lägg till en endpoint för **GET `/todos/:id`**. Använd samma uppdelning:

- **Router:** koppla metoden och sökvägen till en ny controller-funktion. Routern är redan monterad på `/todos`, så sökvägen i routern blir `/:id`.
- **Controller:** läs id från URL:en, anropa servicen och skicka HTTP-svaret. Parametern från URL:en är text; todo-objektens id är tal.
- **Service:** lägg till en funktion `getTodo` i den befintliga `todos.service.ts`. Den ska ta emot ett numeriskt id och leta i arrayen. Återanvänd `Todo`-typen och använd returtypen `Promise<Todo | undefined>`. Arraymetoden `find` kan vara till hjälp.

Om todo:n finns ska svaret vara **HTTP 200** och själva todo-objektet som JSON. Om den saknas ska svaret vara **HTTP 404** och ett JSON-objekt med ett kort `message`.

Läs avsnittet **[res.status() i Express API-dokumentation](https://expressjs.com/en/5x/api/response/)** för att se hur du anger en HTTP-statuskod. Kombinera det med `res.json()` för att skicka ett JSON-svar.

## Kontrollera och ta med

- Prova `GET /todos`, `GET /todos/1` och ett numeriskt id som saknas, exempelvis `GET /todos/999`. Använd webbläsaren eller Postman och kontrollera även statuskoden.
- Kör `npm run check`. Prova att tillfälligt ge en todo en titel som är ett tal, läs typfelet och återställ ändringen.
- Ta med din kod och förbered en kort förklaring av vägen från router via controller till service och tillbaka till HTTP-svaret.
- Om något inte fungerar ännu, ta med ditt försök och beskriv var du fastnade.

Arbeta med arrayen i minnet. POST, validering av inkommande data, React-koppling och PATCH arbetar vi med på livepasset. Ingen databas behövs. Övningen är inte betygsgrundande.
