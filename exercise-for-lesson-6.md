# Övning inför livepass 6

Se filmerna **6.1 React med TypeScript** och **6.2 Typade formulär**. Utgå från den lokala React-todo-appen från filmerna, där du kan visa och lägga till todos.

## 1. Visa en sammanfattning

Skapa en egen komponent `TodoSummary` som visar:

- Totalt antal todos.
- Antal klara todos.
- Antal återstående todos.

Skicka listan från `TodosPage` till komponenten genom en **typad prop**. Återanvänd `Todo`-typen. Beräkna antalen från listan; skapa inget separat state för dem. Arraymetoden `filter` kan vara till hjälp.

Sammanfattningen ska uppdateras när du lägger till en todo. Prova också med en tom lista.

## 2. Visa antal tecken i formuläret

Visa hur många tecken den trimmade titeln innehåller medan användaren skriver. Använd formulärets befintliga state. Räknaren ska bli noll när formuläret töms efter att en todo skapats.

## Kontrollera och ta med

- Skapa en todo med både knappen och Enter. Listan och sammanfattningen ska uppdateras.
- Kontrollera att valideringen från filmerna fortfarande fungerar.
- Ta med din kod och förbered en kort förklaring av var state finns och hur listan når `TodoSummary`.

Arbeta med lokal data. API-koppling, ändring av todos och felhantering gör vi tillsammans på livepasset. Enkel HTML räcker; övningen är inte betygsgrundande.
