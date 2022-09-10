const res = require("express/lib/response");
const { pool } = require("../config/database-schema");
const {
  createUserQuery,
  updateUserQuery,
  getSingleUserQuery,
  deleteUserQuery,
  replaceUserProfilePicture,
} = require("../models/user-accounts");

const createUser = async (req, response, next) => {
  try {
    const values = [
      req.body.first_name,
      req.body.last_name,
      req.body.username,
      req.body.password,
      req.body.profile_picture,
      req.body.created_on,
    ];

    pool.query(createUserQuery, values, (err, res) => {
      if (err) {
        response.status(400).send(err.message);
      } else {
        response.status(201).send("Account created successfully");
      }
    });
  } catch (exc) {
    response.status(500).send(exc);
  }
};

const getUser = async (req, response, next) => {
  try {
    pool.query(getSingleUserQuery, [req.params.user_id], (err, res) => {
      if (err) {
        response.status(400).send(err.message);
      } else if (res.rows.length == 0) {
        response.status(404).send("Record not found");
      } else {
        response.status(200).json(res.rows[0]);
      }
    });
  } catch (exc) {
    response.status(500).send(exc);
  }
};

const updateUser = async (req, response, next) => {
  try {
    const values = [
      req.body.first_name,
      req.body.last_name,
      req.body.username,
      req.body.password,
      req.params.user_id,
    ];

    pool.query(updateUserQuery, values, (err, res) => {
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

const deleteUser = async (req, response, next) => {
  try {
    pool.query(deleteUserQuery, [req.params.user_id], (err, res) => {
      if (err) {
        response.status(400).send(err.message);
      } else if (res.rowCount == 0) {
        response.status(404).send("Record not found");
      } else {
        response.status(200).send("User deleted successfully ");
      }
    });
  } catch (exc) {
    response.status(500).send(exc);
  }
};

const replaceProfilePicture = async (req, response, next) => {
  const values = [req.body.profile_picture, req.params.user_id];
  try {
    pool.query(replaceUserProfilePicture, values, (err, res) => {
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

module.exports = {
  createUser: createUser,
  getUser: getUser,
  updateUser: updateUser,
  deleteUser: deleteUser,
  replaceProfilePicture: replaceProfilePicture,
};
