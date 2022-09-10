const express = require("express");
const {
  createLanguage,
  updateLanguage,
  deleteLanguage,
  deleteAllLanguages,
  getAllLanguages,
} = require("../controllers/languages");
const { handleValidations } = require("../middlewares/handle-validations");
const { validate } = require("../middlewares/validations");

const router = express.Router();

router.post(
  "/create-language",
  validate("addLanguage"),
  handleValidations,
  createLanguage
);
router.put(
  "/:language_id",
  validate("addLanguage"),
  handleValidations,
  updateLanguage
);
router.delete("/:language_id", deleteLanguage);
router.delete("/", deleteAllLanguages);
router.get("/", getAllLanguages);

module.exports = {
  languageRouter: router,
};
