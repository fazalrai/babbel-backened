const express = require("express");
const {
  updateLesson,
  createLesson,
  deleteLesson,
  getAllLessons,
} = require("../controllers/lessons");
const { handleValidations } = require("../middlewares/handle-validations");
const { validate } = require("../middlewares/validations");

const router = express.Router();

router.post(
  "/create-lesson",
  validate("addLesson"),
  handleValidations,
  createLesson
);
router.put(
  "/:lesson_id",
  validate("addLesson"),
  handleValidations,
  updateLesson
);
router.delete("/:lesson_id", deleteLesson);
router.get("/", getAllLessons);

module.exports = {
  lessonRouter: router,
};
