# MARNIK - sajt za hostovanje (statična verzija)

Obična statična HTML stranica: nema React-a, nema runtime-a, ništa se ne generiše u pretraživaču.

```
index.html      naslovna
reference.html  stranica Reference
```

## GitHub Pages

1. Napravi repozitorijum (npr. `marnik-sajt`).
2. Ubaci `index.html` i `reference.html` u root i pushuj na `main`.
3. Settings → Pages → Source: `Deploy from a branch`, Branch: `main`, folder `/ (root)`, Save.
4. Sajt će biti na `https://<korisnik>.github.io/<repo>/`.

Oba fajla moraju biti u istom folderu (linkovi među njima su relativni).

## Kako da proveriš da je na sajtu ISPRAVNA verzija

Otvori hostovanu stranicu, desni klik → "View page source" (Prikaži izvor stranice):

- Ako u izvoru NEMA reči `support.js` i `x-dc` - live je ispravna verzija.
- Ako ih ima - na sajtu je još stari fajl. Obriši sve stare fajlove iz repozitorijuma (`index.html`, `reference.html`, folder `assets`), pa ubaci ove.

Posle push-a GitHub Pages build traje 1-2 minuta, a pretraživač često drži staru verziju u kešu - osveži sa Ctrl+F5 (Cmd+Shift+R na Mac-u).

## Šta radi

- Navigacija: linkovi skaču na sekcije (`#sec-about`, `#sec-team`, `#sec-services`, `#sec-contact`) i na `reference.html`.
- Mobilni meni: dugme "Meni" otvara i zatvara listu.
- Mapa: Leaflet + CARTO pločice, marker na Kondina 1a.
- Forma: otvara mejl klijent sa popunjenim upitom (mailto). Za pravo slanje sa sajta treba servis - mogu da povežem.

## Sa interneta se povlače

Google Fonts (Archivo, IBM Plex Mono), Leaflet 1.9.4 i pločice mape.

## Fotografije

Mesta za slike su siva polja sa opisom šta ide gde. Dostavi fotografije pa ih ubacujem u eksport (`<img>` na mesto svakog polja).
