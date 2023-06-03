```mermaid
  SequenceDiagram
    participant browser
    participant server

    browser->>server: request URL https://studies.cs.helsinki.fi/exampleapp/spa method GET:304
    activate server
    server->>browser: HTML file
    deactivate server

    browser->>server: request URL https://studies.cs.helsinki.fi/exampleapp/main.css method GET:304
    activate server
    server->>browser: main.css
    deactivate server

    browser->>server: request URL https://studies.cs.helsinki.fi/exampleapp/spa.js method GET:304
    activate server
    server->>browser: spa.js
    deactivate server

    Note right of browser: The browser starts executing the JavaSript code that fetches the JSON from the server

    browser->>server: request URL https://studies.cs.helsinki.fi/exampleapp/data.json method GET:304
    activate server
    server->>browser: data.json
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes

    browser->>server: request URL https://studies.cs.helsinki.fi/favicon.ico method GET:200
    activate server
    server->>browser: favicon.ico
    deactivate server
 
```


  
  
