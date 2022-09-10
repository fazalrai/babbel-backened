const { body } = require("express-validator");

const validate = (method) => {
  switch (method) {
    case "createUser": {
      return [
        body("first_name", "first_name doesn't exist").exists(),
        body("first_name", "first_name is empty").notEmpty(),
        body("first_name", "first_name is not a string").isString(),
        body("last_name", "last_name doesn't exist").exists(),
        body("last_name", "last_name is empty").notEmpty(),
        body("last_name", "last_name is not a string").isString(),
        body("username", "username doesn't exist").exists(),
        body("username", "username is empty").notEmpty(),
        body("username", "username is not a string").isString(),
        body("password", "password doesn't exist").exists(),
        body("password", "exists is empty").notEmpty(),
        body("password", "username is not a string").isString(),
        body("profile_picture", "profile_picture doesn't exist").exists(),
        body("profile_picture", "profile_picture is empty").notEmpty(),
      ];
    }
    case "updateUser": {
      return [
        body("first_name", "first_name doesn't exist").exists(),
        body("first_name", "first_name is empty").notEmpty(),
        body("first_name", "first_name is not a string").isString(),
        body("last_name", "last_name doesn't exist").exists(),
        body("last_name", "last_name is empty").notEmpty(),
        body("last_name", "last_name is not a string").isString(),
        body("username", "username doesn't exist").exists(),
        body("username", "username is empty").notEmpty(),
        body("username", "username is not a string").isString(),
        body("password", "password doesn't exist").exists(),
        body("password", "exists is empty").notEmpty(),
        body("password", "username is not a string").isString(),
      ];
    }

    case "replaceProfilePicture": {
      return [
        body("profile_picture", "profile_picture doesn't exist").exists(),
        body("profile_picture", "profile_picture is empty").notEmpty(),
      ];
    }

    case "addLanguage": {
      return [
        body("name", "name doesn't exist").exists(),
        body("name", "name is empty").notEmpty(),
        body("name", "name is not a string").isString(),
        body("code", "code doesn't exist").exists(),
        body("code", "code is empty").notEmpty(),
      ];
    }

    case "addLesson": {
      return [
        body("name", "name doesn't exist").exists(),
        body("name", "name is empty").notEmpty(),
        body("name", "name is not a string").isString(),
        body("language_taught", "Language doesn't exist").exists(),
        body("language_taught", "Language is empty").notEmpty(),
        body("lesson_text", "Lesson text doesn't exist").exists(),
        body("lesson_text", "Lesson text empty").notEmpty(),
      ];
    }
  }
};

module.exports = {
  validate: validate,
};
