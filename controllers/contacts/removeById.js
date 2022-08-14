const { NotFound } = require("http-errors");
const { removeContact } = require("../../models/contacts");

const removeById = async (req, res) => {
  const { contactId } = req.params;
  const result = await removeContact(contactId);
  if (!result) {
    throw new NotFound(`Contact with id ${contactId} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    message: "contact deleted",
    data: {
      result,
    },
  });
};

module.exports = removeById;
