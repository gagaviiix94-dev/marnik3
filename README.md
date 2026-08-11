# MARNIK - sajt (klasična struktura)

```
index.html          naslovna
reference.html      stranica Reference
assets/support.js   runtime koji renderuje stranice
assets/image-slot.js  mesta za fotografije
```

Sadržaj stranica je u `index.html` i `reference.html` - tekst se menja direktno u njima.

## GitHub Pages

1. Napravi repozitorijum (npr. `marnik-sajt`).
2. Ubaci sve iz ovog foldera u root repozitorijuma (`index.html`, `reference.html`, folder `assets`) i pushuj na `main`.
3. Settings → Pages → Source: `Deploy from a branch`, Branch: `main`, folder `/ (root)`, Save.
4. Sajt će biti na `https://<korisnik>.github.io/<repo>/` (prvi build traje 1-2 minuta).

Za sopstveni domen: Settings → Pages → Custom domain unesi domen, a kod registrara dodaj CNAME zapis na `<korisnik>.github.io`.

## Sa interneta se povlače

- Google Fonts (Archivo, IBM Plex Mono)
- Leaflet 1.9.4 i pločice mape (unpkg.com, OpenStreetMap)

Ako sajt treba da radi i bez interneta, mogu da spustim i te fajlove u `assets`.

## Napomene

- Mesta za fotografije su prazna dok se ne ubace slike; dostavi fotografije pa ih ugrađujem u eksport.
- Kontakt forma samo prikazuje potvrdu; za slanje mejla treba servis (npr. Formspree) - mogu da povežem.
- Za verziju u jednom fajlu (bez `assets` foldera) vidi zip `export`.
