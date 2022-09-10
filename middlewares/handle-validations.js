const { validationResult } = require("express-validator");

const handleValidations = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty())
    res.status(400).send({ errors: errors.array({ onlyFirstError: true }) });
  else next();
};

module.exports = {
  handleValidations: handleValidations,
};
