const { pool } = require("../config/database-schema.js");
const {
  createLanguageQuery,
  deleteSingleLanguageQuery,
  updateSingleLanguageQuery,
  deleteAllLanguagesQuery,
  listAllLanguagesQuery,
} = require("../models/languages");

const createLanguage = async (req, response, next) => {
  try {
    const values = [req.body.name, req.body.code, req.body.created_on];

    pool.query(createLanguageQuery, values, (err, res) => {
      if (err) {
        response.status(400).send(err.message);
      } else {
        response.status(201).send("Language created successfully");
      }
    });
  } catch (exc) {
    response.status(500).send(exc);
  }
};

const updateLanguage = async (req, response, next) => {
  const values = [req.body.name, req.body.code, req.params.language_id];
  try {
    pool.query(updateSingleLanguageQuery, values, (err, res) => {
      if (err) {
        response.status(400).send(err.message);
      } else if (res.rows.length == 0) {
        response.status(404).send("Record not found");
      } else {
        response.status(200).send(res.rows[0]);
      }
    });
  } catch (exc) {
    response.status(500).send(exc);
  }
};

const deleteLanguage = async (req, response, next) => {
  const values = [req.params.language_id];

  try {
    pool.query(deleteSingleLanguageQuery, values, (err, res) => {
      console.log("response is ", res.rows);
      if (err) {
        response.status(400).send(err.message);
      } else if (res.rowCount == 0) {
        response.status(404).send("Record not found");
      } else {
        response.status(200).send("Language deleted successfully ");
      }
    });
  } catch (exc) {
    response.status(500).send(exc);
  }
};

const getAllLanguages = async (req, response, next) => {
  try {
    pool.query(listAllLanguagesQuery, (err, res) => {
      if (err) {
        response.status(400).send(err.message);
      } else if (res.rows.length == 0) {
        response.status(404).send("No record exist");
      } else {
        response.status(200).send(res.rows);
      }
    });
  } catch (exc) {
    response.status(500).send(exc);
  }
};

const deleteAllLanguages = async (req, response, next) => {
  try {
    pool.query(deleteAllLanguagesQuery, (err, res) => {
      if (err) {
        response.status(400).send(err.message);
      } else if (res.rowCount == 0) {
        response.status(404).send("No languages exists");
      } else {
        response.status(200).send("All Language deleted successfully");
      }
    });
  } catch (exc) {
    response.status(500).send(exc);
  }
};

module.exports = {
  createLanguage: createLanguage,
  updateLanguage: updateLanguage,
  deleteLanguage: deleteLanguage,
  deleteAllLanguages: deleteAllLanguages,
  getAllLanguages: getAllLanguages,
};
