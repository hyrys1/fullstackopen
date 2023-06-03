```mermaid
sequenceDiagram
  participant browser
  participant server
  
  browser->>server: request https://studies.cs.helsinki.fi/exampleapp/main.css method GET:304
  activate server
  server->>browser: main.css
  deactivate server
  
  browser->>server: https://studies.cs.helsinki.fi/exampleapp/new_note_spa method POST:201
  activate server
  server->>browser: new_note_spa
  deactivate server
  

```
