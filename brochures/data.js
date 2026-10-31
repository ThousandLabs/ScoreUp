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
  news: ['Menu ☰ rapide', 'À revoir aujourd’hui', 'Corriger une réponse', 'Achat Wave / Orange Money dans l’appli'],
  features: [
    { i: 'check', t: 'QCM interactifs', d: 'Réponds, vois tout de suite si c’est juste, avec l’explication de la bonne réponse.' },
    { i: 'timer', t: 'Mode examen chronométré', d: 'Mets-toi en conditions réelles et découvre ta note à la fin.' },
    { i: 'school', t: 'Les séries de ton école', d: 'Choisis ton école (Management, Droit, Ingénieurs, Digital Campus, Madiba) : 5 séries de 20 QCM niveau L1, prêtes à réviser.' },
    { i: 'sparkle', t: 'Tes cours en questions', d: 'Transforme n’importe quel cours en QCM avec une IA, grâce au prompt fourni. Import de PDF possible.' },
    { i: 'repeat', t: 'À revoir aujourd’hui', n: 1, d: 'Tes erreurs de la dernière séance t’attendent sur l’accueil : un toucher pour les revoir.' },
    { i: 'pencil', t: 'Corriger une réponse', n: 1, d: 'L’IA s’est trompée ? Choisis la bonne réponse en 2 secondes : la série est corrigée.' },
    { i: 'book', t: 'Exercices corrigés (TD)', d: 'Entraîne-toi sur des exercices avec leur corrigé détaillé.' },
    { i: 'cards', t: 'Flashcards & régularité', d: 'Touche la carte pour voir la réponse, et garde ta série de jours de révision.' },
    { i: 'menu', t: 'Tout à portée de main', n: 1, d: 'Le menu ☰ ouvre statistiques, historique, favoris, sauvegarde et réglages depuis n’importe quel écran.' },
    { i: 'share', t: 'Partage entre amis', d: 'Exporte une série de questions et envoie-la à un camarade.' }
  ],
  steps3Title: 'Réviser avec ScoreUp, en 3 étapes',
  steps3: [
    { t: 'Choisis ton école', d: 'Importe ses séries de démarrage, ou transforme ton cours en QCM avec une IA.' },
    { t: 'Relis et importe', d: 'Vérifie les réponses, puis colle le résultat dans ScoreUp. Une erreur ? Corrige-la dans l’appli.' },
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
  news: ['Essai gratuit 48 h', 'Achat Wave / Orange Money dans l’appli', 'Interface en anglais', 'Installation guidée'],
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
  trialStep: 'Touchez « Commencer l’essai gratuit » : toutes les fonctions pendant 48 heures, sans code.',
  priceTitle: 'Tarif', price: '10 000 F', priceSub: 'Une seule fois, sans abonnement. Le code est lié à votre téléphone (10 000 F par appareil).',
  perks: ['Toutes les fonctions, sans limite', 'Interface en français ou en anglais', 'Mises à jour incluses', 'Sauvegarde et restauration par fichier', 'Guide d’utilisation intégré'],
  faq: [
    ['Puis-je essayer avant de payer ?', 'Oui : 48 heures d’essai complet, sans code. Vos données sont gardées ensuite.'],
    [WAQ, 'Wave, Orange Money ou espèces, directement depuis l’écran d’activation. Le code arrive sur WhatsApp.'],
    ['Mes données sont-elles envoyées quelque part ?', 'Non. Tout reste sur votre téléphone, sans compte ni inscription.'],
    ['Et si je change de téléphone ?', 'Exportez votre sauvegarde, demandez un nouveau code, puis importez-la.']
  ],
  trialText: 'Sur l’écran d’activation, touchez « Commencer l’essai gratuit » : toutes les fonctions de Budget Flow pendant 48 h, sans code. Une seule fois par téléphone. À la fin, activez l’appli avec votre code : vos données sont conservées.',
  foot2: 'Données 100 % sur votre téléphone · aucune inscription'
},
{
  id: 'nexus-track', name: 'Nexus Track', repo: 'Nexus-Track', pdf: 'Nexus-Track-presentation.pdf', icon: R('nexus-track.png'),
  color: { d1: '#1e1b4b', d2: '#5b4cf0', a: '#5b4cf0', l: '#f0eeff', lb: '#d6d0ff', t: '#3f33b8' },
  tagline: 'Suivez vos ventes. Partagez vos gains.',
  desc: 'L’appli de gestion pour les équipes, les petits commerçants et les étudiants entrepreneurs. Sans compte, sans abonnement, même sans Internet. En français ou en anglais.',
  pills: ['Équipes de prestations', 'Salons de coiffure', 'Boutiques & commerçants', 'Étudiants entrepreneurs'],
  news: ['Essai gratuit 48 h', 'Achat Wave / Orange Money dans l’appli', 'Synchro automatique d’équipe', '2 règles de partage des gains'],
  features: [
    { i: 'bolt', t: 'Une vente en 3 secondes', d: 'Catalogue de services : le prix se remplit tout seul. Espèces, Wave, Orange Money, ventes à crédit.' },
    { i: 'chart', t: 'Tableau de bord clair', d: 'Chiffre d’affaires, charges, bénéfice net, objectif du mois, top services et graphique jour par jour.' },
    { i: 'pie', t: 'Partage des gains flexible', d: 'Au choix : vendeur + caisse commune (un % à celui qui vend, le reste selon les parts) ou % fixes du bénéfice net par membre.' },
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
  trialStep: 'Touchez « Commencer l’essai gratuit » : toutes les fonctions pendant 48 heures, sans code.',
  priceTitle: 'Tarifs — paiement unique, par téléphone', perPerson: true,
  plans: [['1 personne', '7 500 F', '7 500 F / pers.'], ['5 personnes', '35 000 F', '7 000 F / pers.'], ['10 personnes', '60 000 F', '6 000 F / pers.']],
  priceNote: 'Plus de 10 personnes : par packs de 10 (ex. 30 personnes = 3 × 60 000 F = 180 000 F). Chaque code donne l’appli complète, fonctions de responsable incluses.',
  faq: [
    ['Comment sont partagés les gains ?', 'Le responsable choisit la règle : vendeur + caisse commune, ou % fixes. Il peut changer quand il veut.'],
    [WAQ, 'Wave, Orange Money ou espèces, depuis l’écran d’activation. Une seule personne peut payer pour toute l’équipe.'],
    ['Faut-il Internet pour la synchro ?', 'Un peu de réseau pour la synchro automatique. Sans Internet : WhatsApp, fichier ou QR code.'],
    ['Et si je change de téléphone ?', 'Téléchargez votre sauvegarde, demandez un nouveau code, puis restaurez-la.']
  ],
  trialText: 'Sur l’écran d’activation, touchez « Commencer l’essai gratuit » : toutes les fonctions de Nexus Track pendant 48 h, sans code. Une seule fois par téléphone. À la fin, activez l’appli avec votre code : vos données sont conservées.',
  foot2: 'Données chiffrées · aucune inscription'
},
{
  id: 'power-log', name: 'Power Log', repo: 'Power-Log', pdf: 'Power-Log-presentation.pdf', icon: R('power-log.png'),
  color: { d1: '#431407', d2: '#c2410c', a: '#c2410c', l: '#fff4eb', lb: '#fbd5b5', t: '#9a3412' },
  tagline: 'Comprenez enfin votre électricité. Payez moins.',
  desc: 'Le carnet de bord de votre compteur Woyofal : vos appareils, vos recharges, les tranches Senelec et votre vraie consommation, expliqués simplement. 100 % hors ligne, 100 % privé, sans inscription.',
  pills: ['Familles', 'Étudiants & colocations', 'Boutiques & commerçants', 'Propriétaires'],
  news: ['Essai gratuit 48 h', 'Achat Wave / Orange Money dans l’appli', 'Scanner d’étiquette', 'Conseil de recharge'],
  features: [
    { i: 'chart', t: 'Tranches enfin expliquées', d: 'La grille officielle Senelec intégrée : où vous en êtes dans le mois et le prix réel de votre prochain kWh.' },
    { i: 'plug', t: 'Qui consomme quoi ?', d: 'Décrivez vos appareils en une phrase (« 2 télés Samsung 43 pouces, 1 clim 1,5 CV ») : coût par jour et par mois.' },
    { i: 'calc', t: 'Conseil de recharge', n: 1, d: 'Quand recharger et combien, selon votre vraie consommation, pour payer vos kWh au meilleur prix.' },
    { i: 'ticket', t: 'Vérificateur de ticket', d: 'Comparez les kWh reçus à la grille et voyez où est parti l’argent : énergie, taxes, redevance.' },
    { i: 'search', t: 'Mode détective', d: 'Comptez les clignotements du compteur : l’appli mesure la puissance réelle et trouve l’appareil suspect.' },
    { i: 'moon', t: 'Chasse à la veille', d: 'Décodeur, télé, chargeurs : ce qu’ils coûtent éteints, par mois et par an.' },
    { i: 'users', t: 'Plusieurs compteurs & partage', d: 'Maison, boutique, chambre louée. Répartition de la facture entre colocataires sur WhatsApp.' },
    { i: 'bell', t: 'Rappels utiles', d: '« Il vous reste 3 jours », « attendez le 1er pour recharger », « hier vous avez consommé 40 % de plus ».' }
  ],
  callout: '<b>« Avant 6 kWh par jour, aujourd’hui 15 : pourquoi ? »</b> Power Log compare ce que vos appareils devraient consommer à ce que dit vraiment le compteur, et vous dit où chercher : clim, vieux frigo, veille, fuite… ou simplement une grosse recharge achetée au mauvais moment du mois.',
  steps3Title: 'Votre électricité en 3 réflexes',
  steps3: [
    { t: 'Notez votre solde', d: '10 secondes, tous les 1 à 3 jours : l’appli calcule votre consommation réelle et vos jours restants.' },
    { t: 'Rechargez au bon moment', d: 'L’appli vous dit combien recharger pour rester au tarif le plus bas, et quand attendre le 1er.' },
    { t: 'Coupez ce qui coûte', d: 'Chaque appareil affiché en kWh et en francs : « une nuit de clim = 800 F ».' }
  ],
  chips: [['phone', 'Android & iPhone'], ['wifioff', 'Hors ligne'], ['lock', 'Sans compte ni abonnement'], ['globe', 'Français · English · Wolof'], ['qr', 'Activation QR']],
  extra: `<div class="extra"><div class="tx"><b class="t"><span class="new">Nouveau</span> Scannez l’étiquette de vos appareils</b><p>Touchez « Scanner l’étiquette » : la caméra s’ouvre dans l’appli. Visez la plaque signalétique : Power Log <b>lit la puissance, la marque et le modèle</b> et les remplit pour vous.</p><p>Un modèle déjà enregistré retrouve sa puissance tout seul. Hors ligne après la 1re utilisation ; la photo reste sur votre téléphone.</p></div><div><div class="lab">MODEL: KF-1500<br>220-240V~ 50Hz <i>1500W</i></div><div class="res"><span>Puissance (W)</span><span>1 500 W ✓</span></div></div></div>`,
  trialStep: 'Touchez « Commencer l’essai gratuit » : toutes les fonctions pendant 48 heures, sans code.',
  priceTitle: 'Tarif', price: '5 000 F', priceSub: 'Une seule fois, sans abonnement. Le code est lié à votre téléphone (5 000 F par appareil).',
  perks: ['Toutes les fonctions, sans limite', 'Plusieurs compteurs (maison, boutique…)', 'Mises à jour incluses', 'Sauvegarde et restauration par fichier', 'Grille tarifaire modifiable si la Senelec change ses prix'],
  faq: [
    ['Faut-il Internet ?', 'Seulement pour la première ouverture. Ensuite tout fonctionne hors ligne.'],
    [WAQ, 'Wave, Orange Money ou espèces, directement depuis l’écran d’activation. Le code arrive sur WhatsApp.'],
    ['Les tarifs sont-ils officiels ?', 'Oui : grille Senelec en vigueur (CRSE, 1er janvier 2026), modifiable dans les réglages.'],
    ['Et si je change de téléphone ?', 'Exportez votre sauvegarde, demandez un nouveau code, puis importez-la.']
  ],
  trialText: 'Sur l’écran d’activation, touchez « Commencer l’essai gratuit » : toutes les fonctions de Power Log pendant 48 h, sans code. Une seule fois par téléphone. À la fin, activez l’appli avec votre code : vos données sont conservées.',
  foot2: 'Données 100 % sur votre téléphone · aucune inscription'
}];
