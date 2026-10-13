# Kodövning inför lektion 4

Inför livepass 4 på måndag 19 oktober ska du bygga en enkel sida där användaren kan söka efter vädret på en ort.

Se först filmerna _4.0. (komplettering) Visa att data hämtas_, _4.1. Unions, narrowing och enum_ och _4.2. unknown och type guards_. Övningen är inte betygsgrundande.

## 1. Välj ett API

Läs översiktligt dokumentationen för nedan alternativ och välj ett:

| API | Bra att känna till |
|---|---|
| **[Open-Meteo](https://open-meteo.com/en/docs)** | Kräver ingen API-nyckel för övningen. Använd först deras [ortsökning](https://open-meteo.com/en/docs/geocoding-api) för att få koordinater och hämta sedan vädret för platsen. Väderbeskrivningen behöver översättas från en väderkod enligt dokumentationens tabell. |
| **[WeatherAPI](https://www.weatherapi.com/docs/)** | Kräver konto och API-nyckel. Du kan söka aktuellt väder direkt med ett ortnamn. Svaret innehåller väderbeskrivning som text. |
**[OpenWeatherMap](https://openweathermap.org/api/current)** | Kräver konto och API-nyckel. Använd först [Geocoding API](https://openweathermap.org/api/geocoding-api) för att hitta ortens koordinater och hämta sedan aktuellt väder. Svaret innehåller väderbeskrivning som text. Ange `units=metric` för temperatur i Celsius. |

Skriv **2–3 meningar** om varför du väljer ditt API. Utgå exempelvis från dokumentationen, behovet av API-nyckel och hur enkelt det är att hitta den data du behöver.

Du ska bara implementera ett av alternativen.

## 2. Bygg sidan

Använd Vite med vanilla TypeScript. Sidan ska innehålla:

- Ett textfält för ortnamn.
- En sökknapp.
- En plats där resultat eller felmeddelande visas.

När sökningen lyckas ska sidan visa:

- Namnet på den hittade orten.
- Temperatur i grader Celsius.
- En kort väderbeskrivning, exempelvis ”Molnigt”.

Om ortsökningen ger flera träffar räcker det att använda den första. Visa namnet på den ort som API:et faktiskt returnerar.

En enkel sida räcker. Lägg tiden på TypeScript och dataflödet.

## 3. Hämta och typa data

Använd fetch eller Axios och lägg API-anropen i en separat modul.

Undersök API-svaret och skriv typer för **de delar du använder**. Du behöver inte beskriva alla fält som API:et skickar tillbaka.

Arbeta stegvis:

1. Få ett anrop att fungera för en bestämd ort och undersök svaret i konsolen.
2. Koppla sökfältets värde till anropet.
3. Visa resultatet på sidan.
4. Visa ett begripligt felmeddelande om orten inte hittas eller hämtningen misslyckas.

**4. Prova en type guard**

Använd exemplet från video 4.2 som stöd och skriv en egen type guard för en avgränsad del av vädersvaret, exempelvis objektet som innehåller temperaturen.

Låt värdet som kontrolleras ha typen `unknown`. Kontrollera att de egenskaper din typ beskriver finns och har rätt datatyper innan du använder dem.

Prova din kontroll med:

- Ett giltigt exempel från API:et.
- Ett exempel där ett obligatoriskt fält saknas.
- Ett exempel där temperaturen har fel datatyp, exempelvis `"tolv"` i stället för ett tal.
- `null`.

Du kan skapa dessa exempel direkt i koden och skriva ut kontrollens resultat i konsolen. Du behöver inte få det riktiga API:et att skicka felaktig data.

Kom ihåg att `as` anger ett typantagande. Själva kontrollen behöver göras med kod.

## Ta med till livepass 4

- Din kod och vädersida.
- Din korta motivering till API-valet.
- Din type guard och exemplen den ska godkänna respektive avvisa.
- Frågor om det du fastnade på.

Vi följer upp API-valen och arbetar vidare med type guards och felaktiga svar tillsammans. Om något inte fungerar ännu, ta med ditt försök och beskriv var du fastnade.
