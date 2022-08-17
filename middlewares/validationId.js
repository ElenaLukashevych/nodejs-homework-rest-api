const { createError } = require("../helpers");
const { isValidObjectId } = require("mongoose");

const validateId = (req, res, next) => {
  const { contactId } = req.params;
  const isValid = isValidObjectId(contactId);
  if (!isValid) {
    next(createError(404, `Contact with id ${contactId} not found`));
    return;
  }
  next();
};

module.exports = validateId;
