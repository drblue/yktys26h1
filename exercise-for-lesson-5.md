# Övning inför livepass 5

Se filmerna 5.1 och 5.2. Utgå sedan från `04-async-todos`.

1. Öppna `src/services/TodoAPI.types.ts`. Behåll `Todo` som grundtyp och ersätt de separata definitionerna av `CreateTodoPayload` och `UpdateTodoPayload` med typer som härleds med `Omit` och `Partial`.
2. Kontrollera att en ny todo kräver `title` och `completed`, men inget `id`. En uppdatering ska kunna innehålla enbart det fält som ändras.
3. Skapa en generisk resultattyp med en lyckad variant som innehåller `data` och en felvariant som innehåller `message`. Prova typen med både en enskild todo och en lista med todos i små exempel, exempelvis i Playground.
4. Kör appen och kontrollera att skapa, ändra och radera fortfarande fungerar.

Du behöver inte koppla den generiska resultattypen till API-anropen ännu. Det arbetar vi vidare med på livepasset.

Ta med din kod och frågor. Övningen är inte betygsgrundande.
