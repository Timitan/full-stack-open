```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server

    Note left of server: The server adds the new note to its notes array

    Note right of browser: The browser adds the new note to its notes array and redraws the notes
```