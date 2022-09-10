const {
  validationPut,
  validationPost,
  validationPatch,
  validation,
} = require("./validation");
const validateId = require("./validationId");
const ctrlWrapper = require("./ctrlWrapper");
const auth = require("./auth");
const upload = require("./upload");

module.exports = {
  validation,
  validationPut,
  validationPost,
  ctrlWrapper,
  validateId,
  validationPatch,
  auth,
  upload,
};
