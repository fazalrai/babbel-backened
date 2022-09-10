const express = require("express");
const {
  createUser,
  updateUser,
  getUser,
  deleteUser,
  replaceProfilePicture,
} = require("../controllers/user-accounts");
const { handleValidations } = require("../middlewares/handle-validations");
const { validate } = require("../middlewares/validations");

const router = express.Router();

router.post(
  "/create-account",
  validate("createUser"),
  handleValidations,
  createUser
);
router.put("/:user_id", validate("updateUser"), handleValidations, updateUser);
router.delete("/:user_id", deleteUser);
router.get("/:user_id", getUser);
router.patch(
  "/replace-picture/:user_id",
  validate("replaceProfilePicture"),
  handleValidations,
  replaceProfilePicture
);

module.exports = {
  userRouter: router,
};
