```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: The browser submits the new note's text to the server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: The submission status code
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: The base HTML page
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: The page related CSS file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: The page related JS file
    deactivate server

    Note right of browser: The browser executes the JS code that fetches all the notes from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: The list of all notes to display (JSON file)
    deactivate server

    Note right of browser: The browser reads the notes to display and renders them as HTML Elements
```
