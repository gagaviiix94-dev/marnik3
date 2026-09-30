(function () {
  var KEY = 'mk-lang';
  var lang = 'sr';
  try { lang = localStorage.getItem(KEY) === 'en' ? 'en' : 'sr'; } catch (e) {}

  var D = {
    'est. 1992 · Beograd': 'est. 1992 · Belgrade',
    'Naslovna': 'Home', 'O nama': 'About', 'Reference': 'Projects', 'Tim': 'Team', 'Kontakt': 'Contact',
    'Pregled sa fotografijama': 'Photo preview', 'Statična verzija': 'Static version',
    'Meni': 'Menu', 'Zatvori': 'Close',
    'Hero - reper projekat': 'Hero - landmark project',
    'Projektni biro · Beograd': 'Architecture studio · Belgrade',
    'Arhitektura koja traje': 'Architecture that lasts',
    'Projektni biro iz Beograda osnovan 1992. godine. Radimo idejna rešenja i kompletnu tehničku dokumentaciju za građevinsku i upotrebnu dozvolu - za stambene, poslovne i javne objekte.': 'An architecture studio founded in Belgrade in 1992. Concept designs and full permit documentation, from building permit to occupancy permit for residential, commercial and public buildings.',
    'Projektni biro iz Beograda osnovan 1992. godine.': 'An architecture studio founded in Belgrade in 1992.',
    'Idejna rešenja i kompletna tehnička dokumentacija za građevinsku i upotrebnu dozvolu za stambene, poslovne i javne objekte.': 'Concept designs and full permit documentation, from building permit to occupancy permit for residential, commercial and public buildings.',
    'Idejna rešenja i kompletna tehnička dokumentacija za građevinsku i upotrebnu dozvolu': 'Concept designs and full permit documentation, from building permit to occupancy permit',
    'Pogledajte reference →': 'View projects →',
    'Godine iskustva': 'Years of experience', 'Stručnjaka u timu': 'Specialists on the team', 'Najveći kompleks': 'Largest complex',
    'Tri decenije projektovanja': 'Three decades of design', 'u Beogradu': 'in Belgrade',
    'Arhitektonski projektni biro MARNIK osnovan je 1992. godine u Beogradu. Naš tim poseduje značajno iskustvo i čini firmu modernim, fleksibilnim preduzećem koje brzo i efikasno odgovara na potrebe investitora uz visoke standarde kvaliteta.': 'MARNIK architecture studio was founded in Belgrade in 1992. Our experienced team makes the firm a modern, flexible practice that responds quickly and efficiently to clients\u2019 needs while maintaining high standards of quality.',
    'Od osnivanja, MARNIK pruža klijentima uslugu izrade kompletne tehničke dokumentacije potrebne za dobijanje građevinske dozvole, kao i stručnu podršku u svim fazama projektovanja.': 'Since its founding, MARNIK has provided clients with complete technical documentation for building permits, along with expert support at every stage of design.',
    'Naša primarna delatnost je projektovanje arhitektonskih objekata i izrada tehničke dokumentacije za građevinske i upotrebne dozvole.': 'Our core work is the architectural design of buildings and the preparation of technical documentation for building and occupancy permits.',
    'Portfolio / studio': 'Portfolio / studio',
    '"Sve prave arhitektonske vrednosti su ljudske vrednosti - u suprotnom nemaju vrednost."': '"All fine architectural values are human values, else not valuable."',
    'Usluge': 'Services', 'Šta radimo': 'What we do',
    'Projektovanje': 'Architectural design',
    'Idejna rešenja, PGD i PZI projekti za stambene, poslovne i javne objekte.': 'Concept designs, building permit and construction documents for residential, commercial and public buildings.',
    'Tehnička dokumentacija': 'Technical documentation',
    'Kompletna dokumentacija za građevinske i upotrebne dozvole.': 'Complete documentation for building and occupancy permits.',
    'Inženjering i konsalting': 'Engineering and consulting',
    'Savetovanje investitora u svim fazama projekta.': 'Advising clients at every stage of a project.',
    'Visokogradnja': 'Building construction',
    'Specijalnost: višespratnice, hoteli i sportski objekti.': 'Specialties: multi-storey buildings, hotels and sports facilities.',
    'Izbor iz opusa': 'Selected work', 'Reper projekti': 'Landmark projects', 'Sve reference →': 'All projects →',
    'Foto objekta': 'Building photo',
    'Stambeno-poslovni kompleks · 16.000 m²': 'Residential and commercial complex · 16,000 m²',
    'Stambeno-poslovni objekat': 'Residential and commercial building',
    'Stambeno-poslovni objekat · 2.413 m²': 'Residential and commercial building · 2,413 m²',
    '16.000 m²': '16,000 m²',
    'Ljudi iza projekata': 'The people behind the projects',
    'Portret': 'Portrait', 'Direktor i osnivač': 'Director and founder', 'Zamenik direktora': 'Deputy director', 'Biografija': 'Biography',
    'Osnovala je MARNIK 1992. godine i od tada vodi biro. Radi na koncepciji projekata, tehničkoj dokumentaciji i saradnji sa investitorima.': 'Founded MARNIK in 1992 and has led the studio ever since. She works on project concepts, technical documentation and client relations.',
    'Zameni ovaj tekst biografijom - obrazovanje, licence, značajni projekti i oblasti rada.': 'Replace this text with a biography - education, licences, notable projects and areas of work.',
    'Kondina 1a · 11000 Beograd': 'Kondina 1a · 11000 Belgrade',
    'Adresa': 'Address', 'Kondina 1a, 11000 Beograd': 'Kondina 1a, 11000 Belgrade', 'Stari Grad': 'Stari Grad',
    'Telefon': 'Phone', 'Email': 'Email',
    'PIB 100120368 · MB 07812868 · Šifra 7111': 'Tax ID 100120368 · Reg. no. 07812868 · Code 7111',
    'Kondina 1a · Stari Grad': 'Kondina 1a · Stari Grad',
    'Kako do nas →': 'Get directions →',
    'Pošaljite upit': 'Send an inquiry',
    'Projekat': 'Project', 'Detalji o objektu': 'Building details', 'Kontakt i saglasnost': 'Contact and consent',
    '01 · Projekat': '01 · Project', '02 · Detalji': '02 · Details', '03 · Kontakt': '03 · Contact',
    'Tip usluge': 'Service type', 'Izaberite uslugu': 'Select a service',
    'Legalizacija / prenamena': 'Legalisation / change of use',
    'Tip objekta': 'Building type', 'Izaberite tip': 'Select a type',
    'Individualna kuća': 'Detached house', 'Stambeni objekat': 'Residential building', 'Poslovni objekat': 'Commercial building',
    'Industrijski objekat': 'Industrial building', 'Javni objekat': 'Public building', 'Drugo': 'Other',
    'Faza projekta': 'Project stage', 'Izaberite fazu': 'Select a stage',
    'Ideja - još nema dokumentacije': 'Idea - no documentation yet', 'Idejno rešenje': 'Concept design',
    'Projekat za građevinsku dozvolu': 'Building permit design', 'Projekat za izvođenje': 'Construction documents',
    'Objekat u izgradnji': 'Under construction', 'Postojeći objekat - legalizacija ili prenamena': 'Existing building - legalisation or change of use',
    'Lokacija objekta': 'Building location', 'Površina (m²)': 'Floor area (m²)',
    'Imovinsko-pravni status': 'Property title status', 'Izaberite status': 'Select a status',
    'Vlasništvo rešeno - upisan list nepokretnosti': 'Title settled - registered in the land registry',
    'U postupku upisa / legalizacije': 'Registration / legalisation in progress',
    'Suvlasništvo - potrebna saglasnost': 'Co-ownership - consent required',
    'Zakup / pravo građenja': 'Lease / building rights', 'Nije rešeno - treba nam savet': 'Not settled - we need advice',
    'Obim posla': 'Scope of work', 'Izaberite obim': 'Select a scope',
    'Mali - jedan objekat ili intervencija': 'Small - one building or intervention',
    'Srednji - kompletna dokumentacija': 'Medium - complete documentation',
    'Veliki - kompleks ili više faza': 'Large - complex or multiple phases', 'Još nije definisano': 'Not yet defined',
    'Željeni početak': 'Preferred start', 'Izaberite rok': 'Select a timeframe',
    'Odmah': 'Immediately', 'Za 1-3 meseca': 'In 1-3 months', 'Za 3-6 meseci': 'In 3-6 months', 'Za više od 6 meseci': 'In more than 6 months', 'Nije definisano': 'Not defined',
    'Investitor': 'Client', 'Izaberite': 'Select',
    'Fizičko lice': 'Private individual', 'Pravno lice': 'Company', 'Javni naručilac': 'Public authority',
    'Naziv firme / institucije': 'Company / institution name', 'PIB': 'Tax ID', 'Ime i prezime': 'Full name',
    'Kako ste nas našli': 'How did you find us', 'Preporuka': 'Referral', 'Pretraga na internetu': 'Web search',
    'Prethodna saradnja': 'Previous work together', 'Društvene mreže': 'Social media',
    'Poruka': 'Message', 'Prilog - dokument, plan ili foto (opciono)': 'Attachment - document, plan or photo (optional)',
    'Prihvatamo PDF, DWG, DOC i slike.': 'We accept PDF, DWG, DOC and images.',
    'Nada Naletina, DIA': 'Nada Naletina, M.Arch.', 'Nikola Naletina, DIA': 'Nikola Naletina, M.Arch.',
    'Saglasan sam da MARNIK obrađuje unete podatke isključivo radi odgovora na ovaj upit.': 'I agree that MARNIK may process this information solely to respond to this inquiry.',
    '← Nazad': '← Back', 'Dalje →': 'Next →', 'Pošalji upit': 'Send inquiry', 'Pošalji upit →': 'Send inquiry →',
    'Upit je pripremljen': 'Your inquiry is ready',
    'Otvorili smo vaš email program sa popunjenim upitom. Ako se ništa nije otvorilo, pošaljite podatke direktno na marnik.biro@gmail.com. Odgovaramo u roku od dva radna dana.': 'We opened your email app with the inquiry filled in. If nothing opened, send the details directly to marnik.biro@gmail.com. We reply within two working days.',
    'Novi upit': 'New inquiry',
    'Za brži odgovor navedite lokaciju objekta, površinu i fazu u kojoj se projekat nalazi.': 'For a faster reply, include the building location, floor area and current project stage.',
    'Ili direktno na': 'Or write directly to',
    'Arhitektonski projektni biro iz Beograda od 1992. Projektovanje i tehnička dokumentacija.': 'Architecture studio in Belgrade since 1992. Design and technical documentation.',
    '11000 Beograd': '11000 Belgrade', '© 2026 MARNIK d.o.o. Beograd': '© 2026 MARNIK d.o.o. Belgrade',
    'PIB 100120368 · MB 07812868': 'Tax ID 100120368 · Reg. no. 07812868',
    'Radni pregled sa fotografijama →': 'Working preview with photos →',
    'Mapa - Kondina 1a, Beograd': 'Map - Kondina 1a, Belgrade',
    'Ulica, mesto': 'Street, town', 'npr. 320': 'e.g. 320',
    'Realizovani projekti': 'Completed projects',
    'Izaberite tip usluge.': 'Select a service type.', 'Izaberite tip objekta.': 'Select a building type.',
    'Izaberite fazu projekta.': 'Select a project stage.', 'Unesite lokaciju objekta.': 'Enter the building location.',
    'Izaberite imovinsko-pravni status.': 'Select the property title status.', 'Izaberite tip investitora.': 'Select the client type.',
    'Unesite ime i prezime.': 'Enter your full name.', 'Unesite email.': 'Enter your email.',
    'Napišite kratku poruku.': 'Write a short message.', 'Potvrdite saglasnost za obradu podataka.': 'Confirm your consent to data processing.',
    'RADNI PREGLED': 'WORKING PREVIEW',
    'Kliknite ili prevucite fotografiju na bilo koje sivo polje da vidite kako sajt izgleda sa slikama. Slike se čuvaju samo u vašem pretraživaču - niko drugi ih ne vidi.': 'Click or drag a photo onto any grey area to see the site with images. Photos are stored only in your browser - no one else can see them.',
    'Obriši sve slike': 'Remove all photos', 'Nazad na sajt →': 'Back to site →',
    'Izgled sajta': 'Site appearance', 'Tekst': 'Text', 'Pozadina': 'Background', 'Dugmići': 'Buttons',
    'Primeni boje': 'Apply colors', 'Poništi izbor': 'Reset', 'Font': 'Font',
    'Karla (podrazumevani)': 'Karla (default)', 'Primeni font': 'Apply font', 'Početne vrednosti': 'Defaults',
    'Važi samo': 'Applies only', 'u ovom pregledu': 'in this preview',
    'Ukloni fotografiju': 'Remove photo', 'Naziv fonta ili Google Fonts link': 'Font name or Google Fonts link',
    'Ubacite fotografiju': 'Add photo'
  };
  var P = [
    [/^Korak (\d+) \/ (\d+)$/, 'Step $1 / $2'],
    [/^(\d+) fajla? priložen[oa]?$/, '$1 file(s) attached'],
    [/^Ubacite fotografiju: (.+)$/, function (m, x) { return 'Add photo: ' + (D[x] || x); }]
  ];

  function tr(s) {
    var k = s.replace(/\s+/g, ' ').trim();
    if (!k) return null;
    if (D.hasOwnProperty(k)) return D[k];
    for (var i = 0; i < P.length; i++) if (P[i][0].test(k)) return k.replace(P[i][0], P[i][1]);
    return null;
  }
  function doText(n) {
    if (!n.parentElement || n.parentElement.closest('script,style,[data-no-i18n]')) return;
    var v = n.nodeValue, t = tr(v);
    if (t != null && t !== v.trim()) {
      var lead = v.match(/^\s*/)[0], trail = v.match(/\s*$/)[0];
      n.nodeValue = lead + t + trail;
    }
  }
  var ATTRS = ['placeholder', 'aria-label', 'title', 'alt'];
  function doEl(el) {
    for (var i = 0; i < ATTRS.length; i++) {
      var a = el.getAttribute && el.getAttribute(ATTRS[i]);
      if (a) { var t = tr(a); if (t != null && t !== a) el.setAttribute(ATTRS[i], t); }
    }
  }
  function walk(root) {
    if (root.nodeType === 3) { doText(root); return; }
    if (root.nodeType !== 1) return;
    doEl(root);
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
    var n; while ((n = w.nextNode())) { if (n.nodeType === 3) doText(n); else doEl(n); }
  }

  function toggle() {
    var el = document.createElement('button');
    el.type = 'button';
    el.id = 'mk-lang';
    el.setAttribute('data-no-i18n', '');
    el.setAttribute('aria-label', lang === 'en' ? 'Prebaci na srpski' : 'Switch to English');
    el.style.cssText = "display:flex; align-items:stretch; gap:0; padding:0; background:#f8f2eb; border:1px solid var(--acc,#b14e49); cursor:pointer; flex:none; font-family:'Fira Mono',monospace; font-size:12px; letter-spacing:.08em; text-transform:uppercase;";
    var base = 'display:flex; align-items:center; justify-content:center; min-width:42px; min-height:36px; padding:0 10px; transition:background .2s ease, color .2s ease;';
    var on = base + 'background:var(--acc,#b14e49); color:#fff; font-weight:500;', off = base + 'background:#f8f2eb; color:#7e7269; font-weight:500;';
    el.innerHTML = '<span style="' + (lang === 'sr' ? on : off) + '">SR</span><span style="' + (lang === 'en' ? on : off) + '">EN</span>';
    var inactive = el.children[lang === 'sr' ? 1 : 0];
    el.addEventListener('mouseenter', function () { inactive.style.color = '#241c18'; });
    el.addEventListener('mouseleave', function () { inactive.style.color = '#7e7269'; });
    el.addEventListener('click', function () {
      try { localStorage.setItem(KEY, lang === 'en' ? 'sr' : 'en'); } catch (e) {}
      location.reload();
    });
    return el;
  }
  function mountToggle() {
    if (document.getElementById('mk-lang')) return true;
    var nav = document.querySelector('[data-m~="hdrnav"]');
    if (!nav || !nav.parentNode) return false;
    var wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex; align-items:center; gap:10px;';
    var burger = document.querySelector('[data-m~="burger"]');
    if (!document.getElementById('mk-lang-css')) {
      var cs = document.createElement('style');
      cs.id = 'mk-lang-css';
      cs.textContent = '[data-m~="hdrnav"]{margin-left:auto !important;}';
      document.head.appendChild(cs);
    }
    wrap.id = 'mk-lang-wrap';
    nav.parentNode.appendChild(wrap);
    var host = nav.parentNode;
    new MutationObserver(function () {
      if (wrap.parentNode === host && host.lastElementChild !== wrap) host.appendChild(wrap);
    }).observe(host, { childList: true });
    wrap.appendChild(toggle());
    if (burger && burger.parentNode === nav.parentNode) wrap.appendChild(burger);
    return true;
  }

  document.documentElement.lang = lang;
  function start() {
    mountToggle();
    if (lang !== 'en') return;
    walk(document.body);
    new MutationObserver(function (ms) {
      ms.forEach(function (m) {
        if (m.type === 'characterData') doText(m.target);
        else if (m.type === 'attributes') doEl(m.target);
        else m.addedNodes.forEach(walk);
      });
    }).observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ATTRS });
  }
  if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);
  if (!document.getElementById('mk-lang')) {
    var tries = 0, iv = setInterval(function () { if (mountToggle() || ++tries > 40) clearInterval(iv); }, 150);
  }
})();
