# UPPGIFTSBESKRIVNING
Ni ska bygga en enkel todo-applikation med både backend och frontend. Appen ska låta användare hantera sina uppgifter.

*Funktionalitet som krävs:*

- Visa alla 

- Lägga till en ny todo

- Markera en todo som klar/ej klar

- Ta bort en todo

---

# DEL 1: BACKEND (PYTHON FLASK)
**Uppgift**

Skapa ett REST API med följande endpoints:

**GET** /api/todos → Hämta alla todos

**POST** /api/todos → Skapa en ny todo

**PUT** /api/todos/<id> → Uppdatera en todo (status)

**DELETE** /api/todos/<id> → Ta bort en todo

**Datastruktur**

Varje todo ska innehålla följande fält:

**id** (nummer) – Unikt ID för varje todo

**text** (sträng) – Beskrivning av uppgiften

**completed** (boolean) – Status om uppgiften är klar eller inte

**Exempel på JSON-objekt:**

`{`

  `"id": 1,`

  `"text": "Köp mjölk",`

  `"completed": false`

`}`

**Tips för implementering**

- Använd en enkel lista i minnet för att lagra todos (ingen databas krävs)

- Använd **jsonify()** för att returnera JSON-svar

- Tänk på CORS om frontend och backend körs på olika portar

- Glöm inte felhantering (t.ex. om en todo inte finns)

**Kodexempel för att komma igång**


`from flask import Flask, jsonify, request`

`app = Flask(__name__)`

`todos = []`

`@app.route('/api/todos', methods=['GET'])`

`def get_todos():`
    
`# Din kod här`

`pass`

`# Fortsätt med övriga endpoints...`

---

# DEL 2: FRONTEND (REACT + TYPESCRIPT)
**Uppgift**

Skapa ett användargränssnitt med följande komponenter:

- **Input-fält** för att lägga till nya todos

- **Lista** som visar alla todos

- **Checkbox** för varje todo (markera som klar)

- **Ta bort-knapp** för varje todo

**TypeScript Interface**

Definiera en interface för era todos:

`interface Todo {`

  `id: number;`

  `text: string;`

  `completed: boolean;`

`}`

**React-koncept att använda**

- **useState** – För att hantera state (todos, input-värde)

- **useEffect** – För att hämta todos när komponenten laddas

- **fetch/axios** – För API-anrop till backend

- **Event handlers** – För användarinteraktioner (klick, input)

**Tips för implementering**

- Börja med att hämta och visa todos

- Lägg sedan till funktionalitet steg för steg

- Testa varje funktion innan ni går vidare

- Kom ihåg att uppdatera state efter varje API-anrop

**BONUSUPPGIFTER (FRIVILLIGA)**

Om ni blir klara i god tid, här är några utmaningar att utforska:

- Lägg till möjlighet att redigera texten på en befintlig todo

- Implementera filtrering (visa alla / endast aktiva / endast klara)

- Lägg till styling med CSS för att göra appen snyggare

- Lägg till validering (t.ex. hindra tomma todos)

- Spara todos i localStorage så de finns kvar vid omladdning

**ANVÄNDBARA RESURSER**

**Flask dokumentation:** https://flask.palletsprojects.com/

**React dokumentation:** https://react.dev/

**TypeScript dokumentation:** https://www.typescriptlang.org/docs/
