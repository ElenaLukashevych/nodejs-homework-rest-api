const express = require("express");
const router = express.Router();
const { validationPost, validationPut, ctrlWrapper } = require("../../middlewares");
const { contactsSchema } = require("../../schemas");

const { contacts: ctrl } = require("../../controllers");

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:contactId", ctrlWrapper(ctrl.getById));

router.post("/", validationPost(contactsSchema), ctrlWrapper(ctrl.add));

router.delete("/:contactId", ctrlWrapper(ctrl.removeById));

router.put("/:contactId", validationPut(contactsSchema), ctrlWrapper(ctrl.updateById));

module.exports = router;