const { pool } = require("../config/database-schema.js");
const {
  createLessonQuery,
  getAllLessonQuery,
  updateSingleLessonQuery,
  deleteSingleLessonQuery,
} = require("../models/lessons");

const createLesson = async (req, response, next) => {
  try {
    const values = [
      req.body.name,
      req.body.lesson_text,
      req.body.language_taught,
      req.body.created_on,
    ];
    pool.query(createLessonQuery, values, (err, res) => {
      if (err) {
        response.status(400).send(err.message);
      } else {
        response.status(201).send("Lesson created successfully");
      }
    });
  } catch (exc) {
    response.status(500).send(exc);
  }
};

const updateLesson = async (req, response, next) => {
  try {
    const values = [
      req.body.name,
      req.body.lesson_text,
      req.body.language_taught,
      req.params.lesson_id,
    ];
    pool.query(updateSingleLessonQuery, values, (err, res) => {
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

const deleteLesson = async (req, response, next) => {
  try {
    const values = [req.params.lesson_id];
    pool.query(deleteSingleLessonQuery, values, (err, res) => {
      if (err) {
        response.status(400).send(err.message);
      } else if (res.rowCount == 0) {
        response.status(404).send("Record not found");
      } else {
        response.status(200).send("Lesson deleted successfully ");
      }
    });
  } catch (exc) {
    response.status(500).send(exc);
  }
};

const getAllLessons = async (req, response, next) => {
  try {
    pool.query(getAllLessonQuery, (err, res) => {
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

module.exports = {
  createLesson: createLesson,
  updateLesson: updateLesson,
  deleteLesson: deleteLesson,
  getAllLessons: getAllLessons,
};
