Za instalaciju  JSON servera je potrebno je instalirati nodeJS:
https://nodejs.org/en/

Zvanicna dokumentacija servera:
https://github.com/typicode/json-server

Zatim u terminalu pokrenuti komandu: 
npm install -g json-server

    Kreirati db.json, u kome se nalazi JSON objekat koji simulira bazu podataka
    
    Za pokretanje servera potrebno je pokrenuti sledecu komandu:
    
        json-server --watch db.json
    
    Serveru, nakon izvrsenja komande, mozemo pristupiti na:
     http://localhost:3000/