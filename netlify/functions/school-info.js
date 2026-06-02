/**
 * ════════════════════════════════════════════════════════════
 *  VERKEERSSCHOOL FARHAN — AI ASSISTENT TRAINING
 *  Pas dit bestand aan zodra je de info van de klant hebt.
 *  De AI wordt automatisch bijgewerkt na een deploy.
 * ════════════════════════════════════════════════════════════
 */

module.exports = {

  // ── SCHOOL INFO ──────────────────────────────────────────
  naam: 'Verkeersschool Farhan',
  instructeur: 'Farhan',                          // Volledige naam als bekend
  certificering: 'WRM gecertificeerd',
  locaties: ['Assen (Drenthe)', 'Amersfoort (Utrecht)'],
  whatsapp: '+31 6 44626777',
  email: 'info@verkeersschoolfarhan.nl',
  telefoon: '+31 6 44626777',
  bereikbaar: 'Maandag t/m zaterdag, 08:00–20:00',  // ← aanpassen
  talen: ['Nederlands', 'Engels', 'Arabisch', 'Koerdisch'],

  // ── PRIJZEN ──────────────────────────────────────────────
  losLes: {
    prijs: 60,
    duur: 60,             // minuten
    beschrijving: 'Losse les, geen verplichtingen',
  },

  proefles: {
    prijs: 60,
    duur: 60,
    beschrijving: 'Vrijblijvend — geen verplichtingen achteraf',
  },

  pakketten: [
    {
      naam: 'Compleet',
      prijs: 1199,
      lessen: 40,
      inclusiefTTT: true,
      inclusiefExamen: 1,
      inclusiefTheorie: true,
      spoedplanning: false,
      populair: true,
    },
    {
      naam: 'Intensief',
      prijs: 1599,
      lessen: 50,
      inclusiefTTT: true,
      inclusiefExamen: 2,
      inclusiefTheorie: true,
      spoedplanning: true,
      populair: false,
    },
  ],

  // ── LOCATIE DETAILS ──────────────────────────────────────
  cbr: {
    assen: 'CBR Assen',             // ← exacte locatie invullen
    amersfoort: 'CBR Amersfoort',   // ← exacte locatie invullen
  },

  rijgebieden: {
    assen: ['Assen-Centrum', 'Kloosterveen', 'Peelo', 'Rolde', 'Beilen'],   // ← aanvullen
    amersfoort: ['Amersfoort-Centrum', 'Vathorst', 'Nieuwland', 'Soest'],    // ← aanvullen
  },

  // ── INSTRUCTEUR ERVARING ─────────────────────────────────
  jarenErvaring: null,              // ← invullen: bijv. 8
  specialisaties: [                 // ← aanvullen of verwijderen
    // 'Faalangstbegeleiding',
    // 'Spoedcursus rijbewijs',
    // 'Automaat lessen',
  ],

  // ── LESTIJDEN ────────────────────────────────────────────
  lestijden: {
    // ← invullen zodra bekend
    // maandag: '08:00–20:00',
    // zaterdag: '09:00–17:00',
    // zondag: 'Op afspraak',
  },

  // ── UNIEKE VERKOOPARGUMENTEN ─────────────────────────────
  usps: [
    '60 minuten per les voor vaste prijs — geen kortere lessen',
    'Altijd dezelfde instructeur van begin tot examen',
    'Na zak: direct verder zonder meerkosten',
    'Transparante prijzen, geen verborgen kosten',
    '2 locaties: Assen en Amersfoort',
  ],

  // ── WAT DE BOT NIET MAG ZEGGEN ───────────────────────────
  verboden: [
    'Rijbewijs garantie beloven',
    'Exact aantal lessen garanderen zonder proefles',
    'Vergelijkingen maken met andere rijscholen bij naam',
  ],

  // ── TOON ─────────────────────────────────────────────────
  toon: 'warm en direct',       // opties: 'formeel', 'casual', 'warm en direct'
  maxAntwoordZinnen: 3,
}
