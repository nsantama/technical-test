const patientData = require("../datos/pacientes.json");
const indications = require("../datos/indicaciones.json");
const { onRequest}  = require("firebase-functions/v2/https");
const { initializeApp } = require("firebase-admin/app");
const { getDatabase } = require("firebase-admin/database");
const logger = require("firebase-functions/logger");

const app = initializeApp();

exports.populateDatabase = onRequest(async (req, res) => {
  const db = getDatabase(app);

  await db.ref("/pacientes").set(patientData);
  await db.ref("/indicaciones").set(indications);

  logger.info("Populating patients database", {structuredData: patientData});
  logger.info("Populating indications database", {structuredData: indications});
  res.send("Populating database!");
});

exports.listaPacientes = onRequest(async (req, res) => {
  const db = getDatabase(app);
  const snapshot = await db.ref("/pacientes").get();
  let patients = snapshot.val();
  if (!patients) {
    patients = {};
  }

  logger.info("Getting patients", {structuredData: patients});
  res.send(patients);
});

exports.listaIndicacionesPaciente = onRequest(async (req, res) => {
  const patientId = req.query.patientId;
  const db = getDatabase(app);
  const snapshot = await db.ref(`/indicaciones/${patientId}`).get();
  let indications = snapshot.val();
  if (!indications) {
    indications = {};
  }

  logger.info("Getting indications", {structuredData: indications});
  res.send(indications);
});