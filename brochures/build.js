/* Brochures Thousand Labs — génère les PDF de présentation (2 pages A4) des 4 applis.
   Usage : node build.js   (nécessite Playwright + Chromium, et la police Inter installée)
   Le contenu de chaque brochure est dans data.js ; ce fichier ne contient que la mise en page. */
const fs = require('fs'), path = require('path');
const { chromium } = require('playwright');
eval(fs.readFileSync(path.join(__dirname, 'qr.js'), 'utf8'));
const APPS = require('./data.js');

const ICON = {
  check: '<path d="M20 6 9 17l-5-5"/>',
  timer: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2M9 2h6"/>',
  school: '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>',
  sparkle: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2 2M16 16l2 2M6 18l2-2M16 8l2-2"/>',
  book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z"/><path d="M4 19a2 2 0 0 1 2-2h13"/>',
  cards: '<rect x="3" y="6" width="13" height="15" rx="2"/><path d="M8 3h11a2 2 0 0 1 2 2v13"/>',
  chart: '<path d="M3 3v18h18"/><path d="M8 17v-5M13 17V8M18 17v-9"/>',
  share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',
  gift: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M5 12v9h14v-9M7.5 8a2.5 2.5 0 1 1 4.5-1.5V8M16.5 8A2.5 2.5 0 1 0 12 6.5"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  wallet: '<rect x="3" y="6" width="18" height="14" rx="2"/><path d="M3 10h18M16 15h2"/>',
  list: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>',
  gauge: '<path d="M12 14l4-4"/><path d="M3.5 18a10 10 0 1 1 17 0"/>',
  shield: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z"/>',
  flask: '<path d="M9 3h6M10 3v6L4 19a1.5 1.5 0 0 0 1.3 2h13.4A1.5 1.5 0 0 0 20 19l-6-10V3"/><path d="M7 15h10"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  qr: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM20 14v.01M14 20h.01M17 20h4v-3"/>',
  download: '<path d="M12 3v12M7 10l5 5 5-5M4 21h16"/>',
  bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/>',
  receipt: '<path d="M5 3h14v18l-3-2-2 2-2-2-2 2-2-2-3 2V3Z"/><path d="M9 8h6M9 12h6"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.5-3.5 3.2-5.5 6.5-5.5s6 2 6.5 5.5"/><circle cx="17" cy="9" r="2.5"/><path d="M17 14.5c2.5 0 4.2 1.6 4.5 4.5"/>',
  sync: '<path d="M20 11a8 8 0 0 0-14.5-4.5L4 8M4 4v4h4"/><path d="M4 13a8 8 0 0 0 14.5 4.5L20 16M20 20v-4h-4"/>',
  pie: '<path d="M12 3v9h9"/><circle cx="12" cy="12" r="9"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  plug: '<path d="M9 2v5M15 2v5M6 7h12v4a6 6 0 0 1-12 0V7ZM12 17v5"/>',
  calc: '<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M8 6h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 18h.01M12 18h4"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  moon: '<path d="M21 13A9 9 0 1 1 11 3a7 7 0 0 0 10 10Z"/>',
  bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 8 3 8H3s3-1 3-8M10 20a2 2 0 0 0 4 0"/>',
  camera: '<path d="M4 7h3l2-3h6l2 3h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z"/><circle cx="12" cy="13" r="4"/>',
  phone: '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/>',
  wifioff: '<path d="M2 2l20 20M8.5 16.5a5 5 0 0 1 7 0M5 13a10 10 0 0 1 5-2.8M19 13a10 10 0 0 0-2.5-1.8M2 8.8a15 15 0 0 1 4.2-2.6M22 8.8A15 15 0 0 0 11 5"/><path d="M12 20h.01"/>',
  lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  repeat: '<path d="M17 2l4 4-4 4"/><path d="M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4"/><path d="M21 13v2a3 3 0 0 1-3 3H3"/>',
  pencil: '<path d="M4 20h4L19 9l-4-4L4 16v4Z"/><path d="M13.5 6.5l4 4"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  cart: '<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.5 12h12L22 7H6"/>',
  ticket: '<path d="M3 8V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a2 2 0 0 0 0 4v2a2 2 0 0 0 0 4v0a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2a2 2 0 0 0 0-4V8Z"/>'
};
const ic = (n, s = 15) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICON[n] || ''}</svg>`;
const qrSvg = (text, px) => { const m = QR.encode(text, 'M'), n = m.length, q = 2, t = n + q * 2; let d = '';
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) if (m[y][x]) d += `M${x + q} ${y + q}h1v1h-1z`;
  return `<svg width="${px}" height="${px}" viewBox="0 0 ${t} ${t}" shape-rendering="crispEdges"><rect width="${t}" height="${t}" fill="#fff"/><path d="${d}" fill="#000"/></svg>`; };
const NEW = '<span class="new">Nouveau</span>';
const esc = s => String(s);

function html(a) {
  const C = a.color, logo = 'data:image/png;base64,' + fs.readFileSync(a.icon).toString('base64');
  const url = `https://thousandlabs.github.io/${a.repo}/`, short = `thousandlabs.github.io/${a.repo}`;
  const wa = `https://wa.me/221711216581?text=${encodeURIComponent('Bonjour, je souhaite acheter ' + a.name + '.')}`;
  const T = a.tu ? (x, y) => x : (x, y) => y; // tutoiement / vouvoiement
  const feat = a.features.map(f => `<div class="fc"><div class="fi">${ic(f.i)}</div><div><b>${f.t}${f.n ? ' ' + NEW : ''}</b><p>${f.d}</p></div></div>`).join('');
  const steps3 = a.steps3.map((s, i) => `<div class="s3"><span class="num">${i + 1}</span><b>${s.t}</b><p>${s.d}</p></div>`).join('');
  const chips = a.chips.map(c => `<span class="chip">${ic(c[0], 11)}${c[1]}</span>`).join('');
  const faq = a.faq.map(f => `<div class="fq"><b>${f[0]}</b><p>${f[1]}</p></div>`).join('');
  const price = a.plans
    ? `<table class="pt"><tr><th>Formule</th>${a.perPerson ? '<th>Par personne</th>' : ''}<th class="r">Prix</th></tr>${a.plans.map(p => `<tr><td>${p[0]}</td>${a.perPerson ? `<td>${p[2]}</td>` : ''}<td class="r"><b>${p[1]}</b></td></tr>`).join('')}</table><p class="note">${a.priceNote}</p>`
    : `<div class="pc"><span class="mu">Paiement unique</span><div class="big">${a.price}</div><p class="mu">${a.priceSub}</p><ul>${a.perks.map(p => `<li>${ic('check', 12)}${p}</li>`).join('')}</ul></div>`;
  const steps4 = [
    ['Ouvre le lien', 'Ouvrez le lien', T('Scanne le QR code ci-dessous ou ouvre le lien dans Chrome (Safari sur iPhone).', 'Scannez le QR code ci-dessous ou ouvrez le lien dans Chrome (Safari sur iPhone).')],
    ['Installe l’appli', 'Installez l’appli', 'Menu (les 3 points) › « Installer l’application ». Sur iPhone : Partager › « Sur l’écran d’accueil ».'],
    ['Essaie 48 h', 'Essayez 48 h', a.trialStep],
    ['Achète et active', 'Achetez et activez', T('Sur l’écran d’activation : « 🛒 Acheter », choisis ta formule, paie et envoie ta demande. Colle ensuite le code reçu.', 'Sur l’écran d’activation : « 🛒 Acheter », choisissez votre formule, payez et envoyez votre demande. Collez ensuite le code reçu.')]
  ].map((s, i) => `<div class="s4"><span class="n4">${i + 1}</span><b>${T(s[0], s[1])}</b><p>${s[2]}</p></div>`).join('');
  return `<!doctype html><html lang="fr"><head><meta charset="utf-8"><style>
@page{size:A4;margin:0}*{box-sizing:border-box}
body{margin:0;font-family:Inter,sans-serif;color:#151a2d;font-size:8.6pt;line-height:1.38;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.page{width:210mm;height:297mm;position:relative;overflow:hidden;page-break-after:always;display:flex;flex-direction:column}
.page:last-child{page-break-after:auto}
.hd{background:linear-gradient(120deg,${C.d1},${C.d2});color:#fff;padding:9mm 12mm 8mm}
.hd.sm{padding:6mm 12mm 5.5mm;display:flex;align-items:center;gap:4mm}
.brand{display:flex;align-items:center;gap:4.5mm}.brand img{width:16mm;height:16mm;border-radius:4mm;box-shadow:0 2mm 5mm rgba(0,0,0,.25)}
.hd.sm img{width:10mm;height:10mm;border-radius:2.6mm}
.brand h1{margin:0;font:800 25pt/1 Inter;letter-spacing:-.5px}.brand small{display:block;font:600 6.5pt Inter;letter-spacing:2.6px;opacity:.75;margin-top:1.6mm}
.hd h2{font:800 15pt/1.2 Inter;margin:6mm 0 2mm}.hd p{margin:0;opacity:.9;font-size:8.8pt;max-width:150mm}
.pills{display:flex;flex-wrap:wrap;gap:2mm;margin-top:4mm}.pills span{border:1px solid rgba(255,255,255,.55);border-radius:99px;padding:1.2mm 3.4mm;font:600 7pt Inter}
.hd.sm h1{margin:0;font:800 15pt Inter}.hd.sm p{font-size:7.6pt;opacity:.8;margin-top:.6mm}
.bd{padding:4.5mm 12mm 0;flex:1}
.nw{display:flex;align-items:center;gap:3mm;background:${C.l};border:1px solid ${C.lb};border-radius:3mm;padding:2.4mm 3mm;font:600 7.6pt Inter;color:${C.t}}
.new{display:inline-block;background:${C.a};color:#fff;font:800 5.6pt Inter;letter-spacing:1px;text-transform:uppercase;border-radius:99px;padding:.6mm 2.2mm;vertical-align:1px}
.nw .new{font-size:6.4pt;padding:1mm 3mm}
h3{display:flex;align-items:center;gap:2.4mm;font:800 11pt Inter;margin:5mm 0 2.6mm}h3:before{content:"";width:1.3mm;height:4.4mm;border-radius:1mm;background:${C.a}}
.fg{display:grid;grid-template-columns:1fr 1fr;gap:2.4mm}
.fc{display:flex;gap:2.6mm;border:1px solid #e3e7ef;border-radius:2.6mm;padding:2.5mm 3mm;background:#fbfcfe}
.fi{flex:none;width:7mm;height:7mm;border-radius:2mm;background:${C.l};color:${C.a};display:grid;place-items:center}
.fc b{font:700 8pt Inter}.fc p{margin:.6mm 0 0;color:#4b5468;font-size:7.3pt}
.callout{margin-top:2.6mm;border:1px dashed ${C.a};border-radius:2.6mm;padding:2.5mm 3mm;font-size:7.6pt;color:#3c4458;background:#fffdfa}.callout b{color:${C.t}}
.g3{display:grid;grid-template-columns:repeat(3,1fr);gap:2.4mm}.s3{background:${C.l};border-radius:2.6mm;padding:3mm}
.num,.n4b{display:inline-grid;place-items:center;width:5.4mm;height:5.4mm;border-radius:50%;background:${C.a};color:#fff;font:800 7.4pt Inter}
.s3 b{display:block;margin:2mm 0 .6mm;font:700 8pt Inter}.s3 p{margin:0;font-size:7.3pt;color:#4b5468}
.chips{display:flex;flex-wrap:wrap;gap:1.8mm;margin-top:3mm}.chip{display:inline-flex;align-items:center;gap:1.4mm;border:1px solid #e3e7ef;border-radius:99px;padding:1mm 2.6mm;font:600 6.6pt Inter;color:#2b3246}.chip svg{color:${C.a}}
.extra{margin-top:3mm;border:1px solid ${C.lb};background:${C.l};border-radius:3mm;padding:3.4mm 4mm;display:flex;gap:4mm;align-items:center}
.extra .tx{flex:1}.extra b.t{font:800 10pt Inter}.extra p{margin:1.2mm 0 0;font-size:7.6pt;color:#3c4458}
.lab{background:#f3efe6;border:1px solid #d9d2c3;border-radius:2mm;padding:2.4mm 3mm;font:600 7pt/1.5 ui-monospace,Menlo,monospace;color:#3a3a3a;width:48mm}.lab i{font-style:normal;border:1.4px solid #c2410c;border-radius:1mm;padding:0 .6mm}
.res{margin-top:1.6mm;background:#ecfdf3;border:1px solid #abe6c4;border-radius:2mm;padding:2mm 3mm;font:700 7.2pt Inter;color:#14703f;display:flex;justify-content:space-between}
.ft{display:flex;justify-content:space-between;border-top:1px solid #e3e7ef;margin:0 12mm;padding:3mm 0 6mm;font-size:6.8pt;color:#5d667a}.ft b{color:#151a2d}
.g4{display:grid;grid-template-columns:repeat(4,1fr);gap:2.4mm}.s4{border:1px solid #e3e7ef;border-radius:2.6mm;padding:2.8mm 3mm;background:#fbfcfe}
.n4{font:800 12pt Inter;color:${C.a}}.s4 b{display:block;font:700 7.8pt Inter;margin:.6mm 0 .8mm}.s4 p{margin:0;font-size:7pt;color:#4b5468}
.mu{color:#5d667a}.note{font-size:7pt;color:#4b5468;margin:2mm 0 0}
.row2{display:grid;grid-template-columns:1.45fr 1fr;gap:4mm;align-items:start}
.pt{width:100%;border-collapse:separate;border-spacing:0;border:1px solid #e3e7ef;border-radius:2.6mm;overflow:hidden;font-size:8pt}
.pt th{background:${C.d1};color:#fff;text-align:left;font:700 7pt Inter;padding:2.4mm 3mm}.pt td{padding:2.4mm 3mm;border-top:1px solid #edf0f5}.pt .r{text-align:right}
.pc{background:${C.l};border-radius:3mm;padding:3.4mm 4mm;text-align:center}.pc .big{font:800 23pt/1.1 Inter;margin:1mm 0;color:#151a2d}.pc p{margin:0 0 2mm;font-size:7.4pt}
.pc ul{list-style:none;margin:0;padding:0;text-align:left;font-size:7.4pt}.pc li{display:flex;gap:1.6mm;align-items:center;margin:1mm 0}.pc li svg{color:${C.a}}
.qc{border:1.4px solid ${C.a};border-radius:3mm;padding:3.4mm;text-align:center;background:${C.l}}.qc b{font:800 9pt Inter;display:block;margin-bottom:2mm}
.qc .qw{background:#fff;display:inline-block;padding:1.6mm;border-radius:2mm}.qc .u{font:700 6.8pt Inter;color:${C.t};margin-top:2mm;word-break:break-all}.qc .mu{font-size:6.6pt}
.fqg{display:grid;grid-template-columns:1fr 1fr;gap:2.4mm}.fq{border:1px solid #e3e7ef;border-radius:2.6mm;padding:2.6mm 3mm}.fq b{font:700 7.8pt Inter}.fq p{margin:.8mm 0 0;font-size:7.2pt;color:#4b5468}
.cmd{margin-top:4mm;background:${C.d1};color:#fff;border-radius:3.4mm;padding:3.6mm 4mm;display:flex;gap:4.5mm;align-items:center}
.cmd .qw{background:#fff;border-radius:2mm;padding:1.4mm;flex:none}.cmd b.t{font:800 9.6pt Inter}.cmd p{margin:1mm 0 0;font-size:7.3pt;opacity:.9}
.cmd .tel{font:800 17pt Inter;margin:1.4mm 0 .4mm;letter-spacing:.5px;opacity:1}
.ol{margin:1.4mm 0 0;padding-left:4mm;font-size:7.3pt}.ol li{margin:.5mm 0}
.tr{margin-top:3mm;border:1.4px solid ${C.a};background:${C.l};border-radius:3mm;padding:3mm 3.6mm;display:flex;gap:3.6mm;align-items:center}
.tb{flex:none;width:13mm;height:13mm;border-radius:2.6mm;background:${C.a};color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font:800 11pt/1 Inter}.tb small{font:800 4.6pt Inter;letter-spacing:.8px;margin-top:.8mm}
.tr b.t{font:800 9pt Inter}.tr p{margin:.8mm 0 0;font-size:7.2pt;color:#3c4458}
.rmt{font-size:7pt;color:#4b5468;margin:2mm 0 0}
</style></head><body>
<section class="page">
 <div class="hd"><div class="brand"><img src="${logo}"><div><h1>${a.name}</h1><small>PAR THOUSAND LABS</small></div></div>
  <h2>${a.tagline}</h2><p>${a.desc}</p><div class="pills">${a.pills.map(p => `<span>${p}</span>`).join('')}</div></div>
 <div class="bd">
  <div class="nw"><span class="new">Nouveau</span><span>${a.news.join(' • ')}</span></div>
  <h3>Ce que fait ${a.name}</h3><div class="fg">${feat}</div>
  ${a.callout ? `<div class="callout">${a.callout}</div>` : ''}
  <h3>${a.steps3Title}</h3><div class="g3">${steps3}</div>
  <div class="chips">${chips}</div>
  ${a.extra || ''}
 </div>
 <div class="ft"><span><b>${a.name}</b> · Thousand Labs · ${short}</span><span>WhatsApp <b>71 121 65 81</b></span></div>
</section>
<section class="page">
 <div class="hd sm"><img src="${logo}"><div><h1>Obtenir ${a.name}</h1><p>${T('En 2 minutes, en face à face ou à distance', 'En 2 minutes, en face à face ou à distance')}</p></div></div>
 <div class="bd">
  <h3 style="margin-top:3mm">4 étapes, c’est tout</h3><div class="g4">${steps4}</div>
  <p class="rmt">${T('En face à face : touche « QR » sous ton identifiant, le vendeur le scanne et te montre ton code à scanner. Le code ne fonctionne que sur ton téléphone.', 'En face à face : touchez « QR » sous votre code appareil, le vendeur le scanne et vous montre votre code à scanner. Le code ne fonctionne que sur votre téléphone.')}</p>
  <div class="row2"><div><h3>${a.priceTitle}</h3>${price}</div>
   <div><h3 style="visibility:hidden">.</h3><div class="qc"><b>Accéder à ${a.name}</b><div class="qw">${qrSvg(url, 112)}</div><div class="u">${url}</div><div class="mu">${T('Scanne avec l’appareil photo de ton téléphone', 'Scannez avec l’appareil photo de votre téléphone')}</div></div></div></div>
  <h3>Questions fréquentes</h3><div class="fqg">${faq}</div>
  <div class="cmd"><div class="qw">${qrSvg(wa, 78)}</div><div><b class="t">Commande & activation</b>
   <ol class="ol"><li>${T('Sur l’écran d’activation, touche « 🛒 Acheter » et choisis ta formule.', 'Sur l’écran d’activation, touchez « 🛒 Acheter » et choisissez votre formule.')}</li>
   <li>${T('Paie par Wave ou Orange Money au numéro ci-dessous (ou en espèces, en main propre).', 'Payez par Wave ou Orange Money au numéro ci-dessous (ou en espèces, en main propre).')}</li>
   <li>${T('Indique le numéro qui a payé et touche « J’ai payé » : ta demande part sur WhatsApp.', 'Indiquez le numéro qui a payé et touchez « J’ai payé » : votre demande part sur WhatsApp.')}</li></ol>
   <div class="tel">71 121 65 81</div><p>${T('Ton code arrive dès que le paiement est vérifié. Groupe : une seule personne paie et envoie les identifiants de tous. Le QR code ouvre la conversation WhatsApp.', 'Votre code arrive dès que le paiement est vérifié. Groupe : une seule personne paie et envoie les codes appareil de tous. Le QR code ouvre la conversation WhatsApp.')}</p></div></div>
  <div class="tr"><div class="tb">48 h<small>GRATUIT</small></div><div><b class="t">Essai gratuit de 48 h, sans payer</b><p>${a.trialText}</p></div></div>
 </div>
 <div class="ft"><span><b>${a.name}</b> · Thousand Labs · ${short}</span><span>${a.foot2}</span></div>
</section></body></html>`;
}

(async () => {
  const only = process.argv[2];
  const b = await chromium.launch();
  for (const a of APPS) {
    if (only && a.id !== only) continue;
    const p = await b.newPage();
    const h = html(a); fs.writeFileSync(path.join(__dirname, 'out', a.id + '.html'), h);
    await p.setContent(h, { waitUntil: 'load' });
    const over = await p.evaluate(() => [...document.querySelectorAll('.page')].map(pg => { const ft = pg.querySelector('.ft'), bd = pg.querySelector('.bd'); return Math.round(bd.scrollHeight - bd.clientHeight); }));
    console.log(a.id, 'débordement (px) par page :', over.join(' / '));
    await p.pdf({ path: path.join(__dirname, 'out', a.pdf), format: 'A4', printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
  }
  await b.close();
})();
