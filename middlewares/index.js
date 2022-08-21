const {
  validationPut,
  validationPost,
  validationPatch,
} = require("./validation");
const validateId = require("./validationId");
const ctrlWrapper = require("./ctrlWrapper");

module.exports = {
  validationPut,
  validationPost,
  ctrlWrapper,
  validateId,
  validationPatch,
};
