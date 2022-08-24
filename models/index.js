const { Contact, joiSchema, joiSchemaStatusContact } = require("./contact");
const { User, joiRegisterSchema, joiLoginSchema } = require("./user");

module.exports = {
  Contact,
  User,
  joiSchema,
  joiSchemaStatusContact,
  joiRegisterSchema,
  joiLoginSchema,
};
