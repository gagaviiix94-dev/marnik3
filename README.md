# MARNIK - sajt za hostovanje (statična verzija)

Obična statična HTML stranica: nema React-a, nema runtime-a, ništa se ne generiše u pretraživaču.

```
mk-upit.js      forma za upit (skripta i spisak lokacija)
i18n.js         engleski prevod
index.html      naslovna (javna verzija, polja za slike su neaktivna)
reference.html  stranica Reference
pregled.html            radni pregled naslovne za klijenta - polja za slike su aktivna
pregled-reference.html  radni pregled stranice Reference
```

`pregled.html` i `pregled-reference.html` se ne linkuju ni sa jedne javne stranice i nose `noindex` - adresa se šalje samo klijentu. Tamo klikom ili prevlačenjem ubacuje fotografije na siva polja i vidi kako sajt izgleda; slike se čuvaju samo u njegovom pretraživaču (localStorage), ne šalju se nikome i ne postaju deo sajta. U crnoj traci: "Obriši sve slike" vraća sva polja na prazno, "Nazad na sajt" izlazi iz pregleda na javnu verziju i pri tom automatski briše sve ubacene fotografije. "×" u uglu slike briše pojedinačnu fotografiju.

Ulaz u pregled je diskretan link u futeru javnih stranica ("Radni pregled sa fotografijama"). Pre nego što sajt postane javan, obriši taj link iz \`index.html\` i \`reference.html\`, a po želji i same \`pregled*.html\` fajlove. Dve stranice pregleda su povezane međusobno, pa se klijent kreće kroz ceo sajt bez izlaska iz pregleda.

## GitHub Pages

1. Napravi repozitorijum (npr. `marnik-sajt`).
2. Ubaci sve fajlove iz ovog foldera u root (uključujući `.nojekyll`) i pushuj na `main`.
3. Settings → Pages → Source: `Deploy from a branch`, Branch: `main`, folder `/ (root)`, Save.
4. Sajt će biti na `https://<korisnik>.github.io/<repo>/`.

Svi fajlovi moraju biti u istom folderu (linkovi među njima su relativni).

## Kako da proveriš da je na sajtu ISPRAVNA verzija

Otvori hostovanu stranicu, desni klik → "View page source" (Prikaži izvor stranice):

- Ako u izvoru NEMA reči `support.js` i `x-dc` - live je ispravna verzija.
- Ako ih ima - na sajtu je još stari fajl. Obriši sve stare fajlove iz repozitorijuma (`index.html`, `reference.html`, folder `assets`), pa ubaci ove.

Posle push-a GitHub Pages build traje 1-2 minuta, a pretraživač često drži staru verziju u kešu - osveži sa Ctrl+F5 (Cmd+Shift+R na Mac-u).

## Šta radi

- Navigacija: linkovi skaču na sekcije (`#sec-about`, `#sec-team`, `#sec-services`, `#sec-contact`) i na `reference.html`.
- Mobilni meni: dugme "Meni" otvara i zatvara listu.
- Mapa: Leaflet + CARTO pločice, marker na Kondina 1a.
- Forma za upit (`mk-upit.js`): tri koraka, provera polja, spisak opština i mesta. Slanje ide preko Web3Forms: u `mk-upit.js` upiši svoj ključ umesto `OVDE-UNESI-WEB3FORMS-ACCESS-KEY`. Dok ključ nije upisan, forma samo prikazuje potvrdu i ništa se ne šalje.

## Sa interneta se povlače

Google Fonts (EB Garamond, Karla, Fira Mono), Leaflet 1.9.4 i pločice mape.

## Fotografije

Mesta za slike su siva polja sa opisom šta ide gde. Dostavi fotografije pa ih ubacujem u eksport (`<img>` na mesto svakog polja).
