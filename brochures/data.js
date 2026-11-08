/* Contenu des brochures Thousand Labs. Modifier ici, puis : node build.js */
const R = p => require('path').join(__dirname, 'icons', p);
const WAQ = 'Comment payer ?';
module.exports = [
{
  id: 'scoreup', name: 'ScoreUp', repo: 'ScoreUp', pdf: 'ScoreUp-presentation.pdf', icon: R('scoreup.png'), tu: true,
  color: { d1: '#0f1d5c', d2: '#2447c9', a: '#2447c9', l: '#eef2ff', lb: '#cdd7fb', t: '#1e3a8a' },
  tagline: 'Révise mieux. Progresse plus vite.',
  desc: 'L’appli de révision avec QCM, examens chronométrés, flashcards et exercices corrigés. Fonctionne hors ligne, sur ton téléphone, en français ou en anglais.',
  pills: ['Élèves', 'Étudiants', 'Préparation d’examens', 'Profs & formateurs'],
  news: ['Copies de secours automatiques', 'XP, niveaux et 30 badges', 'Révision éclair', 'Bilan de la semaine'],
  features: [
    { i: 'check', t: 'QCM interactifs', d: 'Réponds, vois tout de suite si c’est juste, avec l’explication de la bonne réponse.' },
    { i: 'timer', t: 'Mode examen chronométré', d: 'Mets-toi en conditions réelles et découvre ta note à la fin.' },
    { i: 'school', t: 'Les séries de ton école', d: 'Choisis ton école (Management, Droit, Ingénieurs, Digital Campus, Madiba) : 5 séries de 20 QCM niveau L1, prêtes à réviser.' },
    { i: 'sparkle', t: 'Tes cours en questions', n: 1, d: 'Prompt fourni, accès direct à Gemini, ChatGPT ou Claude, puis collage ou partage vers ScoreUp en une touche.' },
    { i: 'repeat', t: 'Révision éclair', n: 1, d: '10 questions de toutes tes séries en un toucher, en commençant par tes erreurs à revoir aujourd’hui.' },
    { i: 'pencil', t: 'Corrigés sous contrôle', n: 1, d: 'Signale une question douteuse, fais vérifier la série par une 2e IA, corrige la réponse en 2 secondes.' },
    { i: 'book', t: 'Exercices corrigés (TD)', d: 'Entraîne-toi sur des exercices avec leur corrigé détaillé.' },
    { i: 'cards', t: 'Motivation au quotidien', n: 1, d: 'XP, niveaux, badges, combo, objectif du jour et joker pour garder ta série de jours. Flashcards incluses.' },
    { i: 'menu', t: 'Tout à portée de main', d: 'Le menu ☰ ouvre statistiques, historique, favoris, sauvegarde et réglages depuis n’importe quel écran.' },
    { i: 'share', t: 'Partage entre amis', d: 'Exporte une série de questions et envoie-la à un camarade.' }
  ],
  steps3Title: 'Réviser avec ScoreUp, en 3 étapes',
  steps3: [
    { t: 'Choisis ton école', d: 'Importe ses séries de démarrage, ou transforme ton cours en QCM avec une IA.' },
    { t: 'Relis et importe', d: 'Colle ou partage le résultat dans ScoreUp. Un doute ? Signale la question ou fais vérifier la série.' },
    { t: 'Entraîne-toi', d: 'QCM pour apprendre, examen pour te tester, flashcards pour mémoriser, puis revois tes erreurs.' }
  ],
  chips: [['phone', 'Android & iPhone'], ['wifioff', 'Hors ligne'], ['lock', 'Sans compte ni abonnement'], ['globe', 'Français · English'], ['qr', 'Activation QR']],
  trialStep: 'Tout est gratuit pendant 48 heures dès la première ouverture, sans code.',
  priceTitle: 'Tarifs — paiement unique',
  plans: [['1 personne', '5 000 F'], ['2 personnes', '9 000 F'], ['5 personnes', '21 000 F']],
  priceNote: '48 h d’essai gratuit avant de payer. Un code par téléphone. Une IA peut se tromper : vérifie toujours les corrigés générés avec ton cours.',
  faq: [
    ['Puis-je essayer avant de payer ?', 'Oui : 48 heures d’essai complet dès la première ouverture, sans code.'],
    [WAQ, 'Wave, Orange Money ou espèces, directement depuis l’écran d’activation. Ton code arrive sur WhatsApp.'],
    ['Faut-il Internet ?', 'Seulement pour la première ouverture et la lecture d’un PDF. Le reste marche hors ligne.'],
    ['Et si je change de téléphone ?', 'Exporte ta sauvegarde, demande un nouveau code, puis restaure-la.']
  ],
  trialText: 'Tout est débloqué dès la première ouverture, sans code. Une seule fois par téléphone. À la fin, active l’appli avec ton code : tes séries et tes résultats sont conservés.',
  foot2: 'Données 100 % sur ton téléphone · aucune inscription'
},
{
  id: 'budget-flow', name: 'Budget Flow', repo: 'Budget-Flow', pdf: 'Budget-Flow-presentation.pdf', icon: R('budget-flow.png'),
  color: { d1: '#0b3b37', d2: '#0f766e', a: '#0f766e', l: '#e9f7f5', lb: '#b8e3dd', t: '#115e59' },
  tagline: 'Maîtrisez votre argent, jour après jour.',
  desc: 'Gestion financière personnelle et suivi de petits projets commerciaux. 100 % hors ligne, 100 % privé, sans inscription. En français ou en anglais.',
  pills: ['Étudiants', 'Jeunes actifs', 'Petits projets commerciaux', 'Familles'],
  news: ['Nouveau prix : 5 000 F', 'Copies de secours automatiques', 'Essai gratuit 48 h', 'Interface en anglais'],
  features: [
    { i: 'wallet', t: 'Entrées & projets', d: 'Revenus, multi-projets commerciaux et convertisseur de devises intégré.' },
    { i: 'list', t: 'Journal des dépenses', d: 'Chaque dépense notée en temps réel, avec sorties fixes et enveloppes par poste.' },
    { i: 'chart', t: 'Projections & plafonds', d: 'Votre budget vu par jour, semaine ou mois, avec des plafonds à ne pas dépasser.' },
    { i: 'gauge', t: 'Mode survie', d: 'Combien de jours pouvez-vous tenir avec ce qu’il vous reste ? La réponse en un coup d’œil.' },
    { i: 'shield', t: 'Caisse de secours', d: 'Une épargne d’urgence isolée, pour ne pas y toucher par erreur.' },
    { i: 'flask', t: 'Simulateur de fin de mois', d: 'Testez un achat avant de le faire et comparez plusieurs scénarios.' },
    { i: 'target', t: 'Objectifs d’épargne', d: 'Projets personnels avec suivi de progression, et bilan mensuel complet.' },
    { i: 'cart', t: 'Achat et activation simples', n: 1, d: 'Formule, paiement Wave / Orange Money et demande WhatsApp depuis l’appli. Code lié au téléphone.' },
    { i: 'globe', t: 'Français ou anglais', d: 'Choisissez la langue de l’appli dès l’écran d’activation ou dans les Réglages.' },
    { i: 'download', t: 'Guide & installation guidée', d: 'Un guide d’utilisation complet, et l’installation expliquée pas à pas dans les Réglages.' }
  ],
  steps3Title: 'Votre mois en 3 réflexes',
  steps3: [
    { t: 'Notez chaque dépense', d: 'Deux secondes après chaque achat : le journal se met à jour tout seul.' },
    { t: 'Suivez votre plafond', d: 'Budget Flow vous dit combien vous pouvez encore dépenser aujourd’hui.' },
    { t: 'Faites le bilan', d: 'En fin de mois, voyez où est parti l’argent et ajustez le mois suivant.' }
  ],
  chips: [['phone', 'Android & iPhone'], ['wifioff', 'Hors ligne'], ['lock', 'Sans compte ni abonnement'], ['globe', 'Français · English'], ['qr', 'Activation QR']],
  trialStep: 'Touchez « Essayer gratuitement 48 h » : toutes les fonctions pendant 48 heures, sans code.',
  priceTitle: 'Tarif', price: '5 000 F', priceSub: 'Une seule fois, sans abonnement. Le code est lié à votre téléphone (5 000 F par appareil).',
  perks: ['Toutes les fonctions, sans limite', 'Interface en français ou en anglais', 'Mises à jour incluses', 'Sauvegarde et restauration par fichier', 'Guide d’utilisation intégré'],
  faq: [
    ['Puis-je essayer avant de payer ?', 'Oui : 48 heures d’essai complet, sans code. Vos données sont gardées ensuite.'],
    [WAQ, 'Wave, Orange Money ou espèces, directement depuis l’écran d’activation. Le code arrive sur WhatsApp.'],
    ['Mes données sont-elles envoyées quelque part ?', 'Non. Tout reste sur votre téléphone, sans compte ni inscription.'],
    ['Et si je change de téléphone ?', 'Exportez votre sauvegarde, demandez un nouveau code, puis importez-la.']
  ],
  trialText: 'Sur l’écran d’activation, touchez « Essayer gratuitement 48 h » : toutes les fonctions de Budget Flow pendant 48 h, sans code. Une seule fois par téléphone. À la fin, activez l’appli avec votre code : vos données sont conservées.',
  foot2: 'Données 100 % sur votre téléphone · aucune inscription'
},
{
  id: 'nexus-track', name: 'Nexus Track', repo: 'Nexus-Track', pdf: 'Nexus-Track-presentation.pdf', icon: R('nexus-track.png'),
  color: { d1: '#1e1b4b', d2: '#5b4cf0', a: '#5b4cf0', l: '#f0eeff', lb: '#d6d0ff', t: '#3f33b8' },
  tagline: 'Suivez vos ventes. Partagez vos gains.',
  desc: 'L’appli de gestion pour les équipes, les petits commerçants et les étudiants entrepreneurs. Sans compte, sans abonnement, même sans Internet. En français ou en anglais.',
  pills: ['Équipes de prestations', 'Salons de coiffure', 'Boutiques & commerçants', 'Étudiants entrepreneurs'],
  news: ['Ventes perso (100 % au vendeur)', 'Saisie rapide des ventes passées', 'Synchro automatique d’équipe', 'Essai gratuit 48 h'],
  features: [
    { i: 'bolt', t: 'Une vente en 3 secondes', d: 'Catalogue de services : le prix se remplit tout seul. Espèces, Wave, Orange Money, ventes à crédit.' },
    { i: 'chart', t: 'Tableau de bord clair', d: 'Chiffre d’affaires, charges, bénéfice net, objectif du mois, top services et graphique jour par jour.' },
    { i: 'pie', t: 'Partage des gains flexible', d: 'Au choix : vendeur + caisse commune (un % à celui qui vend, le reste selon les parts) ou % fixes du bénéfice net par membre. Ventes perso possibles, hors partage.', n: 1 },
    { i: 'calendar', t: 'Charges automatiques', d: 'Wifi, loyer, abonnements : comptés chaque mois sans les ressaisir. Plus les dépenses ponctuelles.' },
    { i: 'sync', t: 'Synchro d’équipe', n: 1, d: 'Automatique avec un code d’équipe dès qu’il y a du réseau, ou sans Internet par WhatsApp, fichier ou QR code.' },
    { i: 'receipt', t: 'Reçus & bilans WhatsApp', d: 'Un reçu envoyé au client en un geste, et le bilan du mois partagé à toute l’équipe.' },
    { i: 'shield', t: 'Privé et chiffré', d: 'Les données sont chiffrées sur le téléphone avant toute synchro, avec sauvegarde et restauration.' },
    { i: 'cart', t: 'Achat et activation simples', n: 1, d: 'Formule, paiement Wave / Orange Money et demande WhatsApp depuis l’appli. Un code par téléphone.' },
    { i: 'globe', t: 'Français ou anglais', d: 'Choisissez la langue de l’appli dès l’écran d’activation ou dans les Réglages.' },
    { i: 'download', t: 'Installation guidée', d: 'Les Réglages expliquent pas à pas comment installer l’appli sur Android, iPhone ou ordinateur.' }
  ],
  steps3Title: 'Comment marche la synchro d’équipe ?',
  steps3: [
    { t: 'Chacun vend', d: 'Chaque membre enregistre ses ventes sur son téléphone, même sans réseau.' },
    { t: 'Tout se synchronise', d: 'Avec le code d’équipe, les ventes partent toutes seules dès qu’il y a du réseau. Sinon : WhatsApp ou QR code.' },
    { t: 'Tout le monde est à jour', d: 'Même tableau de bord pour tous, et le responsable garde la main sur les règles.' }
  ],
  chips: [['phone', 'Android & iPhone'], ['wifioff', 'Fonctionne hors ligne'], ['lock', 'Sans compte ni abonnement'], ['globe', 'Français · English'], ['qr', 'Activation QR']],
  trialStep: 'Touchez « Essayer gratuitement 48 h » : toutes les fonctions pendant 48 heures, sans code.',
  priceTitle: 'Tarifs — paiement unique, par téléphone', perPerson: true,
  plans: [['1 personne', '7 500 F', '7 500 F / pers.'], ['5 personnes', '35 000 F', '7 000 F / pers.'], ['10 personnes', '60 000 F', '6 000 F / pers.']],
  priceNote: 'Plus de 10 personnes : par packs de 10 (ex. 30 personnes = 3 × 60 000 F = 180 000 F). Chaque code donne l’appli complète, fonctions de responsable incluses.',
  faq: [
    ['Comment sont partagés les gains ?', 'Le responsable choisit la règle : vendeur + caisse commune, ou % fixes. Il peut changer quand il veut.'],
    [WAQ, 'Wave, Orange Money ou espèces, depuis l’écran d’activation. Une seule personne peut payer pour toute l’équipe.'],
    ['Faut-il Internet pour la synchro ?', 'Un peu de réseau pour la synchro automatique. Sans Internet : WhatsApp, fichier ou QR code.'],
    ['Et si je change de téléphone ?', 'Téléchargez votre sauvegarde, demandez un nouveau code, puis restaurez-la.']
  ],
  trialText: 'Sur l’écran d’activation, touchez « Essayer gratuitement 48 h » : toutes les fonctions de Nexus Track pendant 48 h, sans code. Une seule fois par téléphone. À la fin, activez l’appli avec votre code : vos données sont conservées.',
  foot2: 'Données chiffrées · aucune inscription'
},
{
  id: 'power-log', name: 'Power Log', repo: 'Power-Log', pdf: 'Power-Log-presentation.pdf', icon: R('power-log.png'),
  color: { d1: '#431407', d2: '#c2410c', a: '#c2410c', l: '#fff4eb', lb: '#fbd5b5', t: '#9a3412' },
  tagline: 'Comprenez enfin votre électricité. Payez moins.',
  desc: 'Le carnet de bord de votre compteur Woyofal : vos appareils, vos recharges, les tranches Senelec et votre vraie consommation, expliqués simplement. 100 % hors ligne, 100 % privé, sans inscription.',
  pills: ['Familles', 'Étudiants & colocations', 'Boutiques & commerçants', 'Propriétaires'],
  news: ['Journal du jour', 'Profil de la semaine', 'Prévision du crédit jour par jour', 'Rapport du mois'],
  features: [
    { i: 'chart', t: 'Tranches enfin expliquées', d: 'La grille officielle Senelec intégrée : où vous en êtes dans le mois et le prix réel de votre prochain kWh.' },
    { i: 'plug', t: 'Qui consomme quoi ?', d: 'Décrivez vos appareils en une phrase ou scannez leur étiquette : coût de chacun par jour et par mois.' },
    { i: 'pencil', t: 'Journal du jour', n: 1, d: 'Quelqu’un en plus, invités, coupure, machine à laver ×3, clim 6 h : notez ce qui change, voyez ce que ça coûte.' },
    { i: 'calendar', t: 'Profil de la semaine', n: 1, d: 'La vraie consommation de chaque jour (lundi, mardi…) chez vous, et l’effet mesuré de vos jours spéciaux.' },
    { i: 'calc', t: 'Conseil de recharge & prévision', d: 'Quand recharger et combien, avec un crédit décompté jour par jour selon votre semaine réelle.' },
    { i: 'search', t: 'Ticket & mode détective', d: 'Vérifiez les kWh reçus contre la grille, mesurez la puissance réelle d’un appareil suspect.' },
    { i: 'moon', t: 'Veille & simulateur d’achat', d: 'Ce que coûtent les appareils éteints, et ce qu’un nouvel appareil ajoutera à votre facture.' },
    { i: 'receipt', t: 'Compteurs, partage & rapport', d: 'Maison, boutique, colocation : facture partagée et rapport du mois à envoyer sur WhatsApp ou en PDF.' }
  ],
  callout: '<b>« Avant 6 kWh par jour, aujourd’hui 15 : pourquoi ? »</b> Power Log compare vos appareils à ce que dit vraiment le compteur et vous dit où chercher : clim, vieux frigo, veille… ou un week-end avec plus de monde.',
  steps3Title: 'Votre électricité en 3 réflexes',
  steps3: [
    { t: 'Notez votre solde chaque soir', d: '10 secondes, à la même heure : votre vraie consommation, jour par jour.' },
    { t: 'Notez vos jours spéciaux', d: 'Personne en plus, invités, coupure : l’appli mesure leur effet et ajuste la prévision.' },
    { t: 'Rechargez au bon moment', d: 'Le bon montant au bon jour, au tarif le plus bas, sans tomber à zéro.' }
  ],
  chips: [['phone', 'Android & iPhone'], ['wifioff', 'Hors ligne'], ['lock', 'Sans compte ni abonnement'], ['globe', 'Français · English · Wolof'], ['qr', 'Activation QR']],
  extra: `<div class="extra"><div class="tx"><b class="t"><span class="new">Nouveau</span> Votre semaine, jour par jour</b><p>Chez vous, le samedi ne ressemble pas au mardi. En 2 à 3 semaines de relevés, Power Log calcule ce que consomme chaque jour et ce que coûtent vos jours spéciaux (« personne en plus : +75 % »).</p><p>Un jour chargé arrive ? Notez-le à l’avance : la prévision dit si le crédit tiendra.</p></div><div><div style="font-size:8.5pt;font-weight:600;margin-bottom:2mm">Ma semaine normale (kWh) <span style="color:#c2410c">■</span> <span style="font-weight:400">jours spéciaux</span></div><div style="display:flex;align-items:flex-end;gap:2.2mm;height:24mm">${[['Lun',52,0],['Mar',48,0],['Mer',50,0],['Jeu',55,0],['Ven',60,0],['Sam',78,1],['Dim',70,1]].map(([d,h,sp])=>`<div style="flex:1;text-align:center"><div style="height:${h*0.28}mm;background:${sp?'#c2410c':'#fbd5b5'};border-radius:1mm 1mm 0 0"></div><div style="font-size:7pt;margin-top:1mm">${d}</div></div>`).join('')}</div><div class="res" style="margin-top:2mm"><span>Crédit épuisé vers</span><span>jeudi 19</span></div></div></div>`,
  trialStep: 'Touchez « Essayer gratuitement 48 h » : toutes les fonctions pendant 48 heures, sans code.',
  priceTitle: 'Tarif', price: '5 000 F', priceSub: 'Une seule fois, sans abonnement. Le code est lié à votre téléphone (5 000 F par appareil).',
  perks: ['Toutes les fonctions, sans limite', 'Plusieurs compteurs (maison, boutique…)', 'Mises à jour incluses', 'Sauvegarde et restauration par fichier', 'Grille tarifaire modifiable si la Senelec change ses prix'],
  faq: [
    ['Faut-il Internet ?', 'Seulement pour la première ouverture. Ensuite tout fonctionne hors ligne.'],
    [WAQ, 'Wave, Orange Money ou espèces, directement depuis l’écran d’activation. Le code arrive sur WhatsApp.'],
    ['Les tarifs sont-ils officiels ?', 'Oui : grille Senelec en vigueur (CRSE, 1er janvier 2026), modifiable dans les réglages.'],
    ['Et si je change de téléphone ?', 'Exportez votre sauvegarde, demandez un nouveau code, puis importez-la.']
  ],
  trialText: 'Sur l’écran d’activation, touchez « Essayer gratuitement 48 h » : toutes les fonctions de Power Log pendant 48 h, sans code. Une seule fois par téléphone. À la fin, activez l’appli avec votre code : vos données sont conservées.',
  foot2: 'Données 100 % sur votre téléphone · aucune inscription'
}];
