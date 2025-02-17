const express = require("express");
const router = express.Router();
const {
  validationPost,
  validationPut,
  ctrlWrapper,
  validateId,
  validationPatch,
  auth,
} = require("../../middlewares");
const { joiSchema, joiSchemaStatusContact } = require("../../models");
const { contacts: ctrl } = require("../../controllers");

router.get("/", auth, ctrlWrapper(ctrl.getAll));

router.get("/:contactId", auth, validateId, ctrlWrapper(ctrl.getById));

router.post("/", auth, validationPost(joiSchema), ctrlWrapper(ctrl.add));

router.delete("/:contactId", validateId, ctrlWrapper(ctrl.removeById));

router.put(
  "/:contactId",
  validateId,
  validationPut(joiSchema),
  ctrlWrapper(ctrl.updateById)
);

router.patch(
  "/:contactId/favorite",
  validateId,
  validationPatch(joiSchemaStatusContact),
  ctrlWrapper(ctrl.updateStatusContact)
);

module.exports = router;
