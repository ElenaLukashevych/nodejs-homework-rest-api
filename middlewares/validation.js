const { BadRequest } = require("http-errors");

const validationPost = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      throw new BadRequest("missing required name field");
    }
    next();
  };
};

const validationPut = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      throw new BadRequest("missing fields");
    }
    next();
  };
};

const validationPatch = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      throw new BadRequest("missing field favorite");
    }
    next();
  };
};

module.exports = {
  validationPost,
  validationPut,
  validationPatch,
};
