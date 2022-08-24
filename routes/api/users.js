const express = require("express");
const { validation, ctrlWrapper, auth } = require("../../middlewares");
const router = express.Router();
const { users: ctrl } = require("../../controllers");
const { joiRegisterSchema, joiLoginSchema } = require("../../models/user");

router.post(
  "/register",
  validation(joiRegisterSchema),
  ctrlWrapper(ctrl.register)
);
router.post("/login", validation(joiLoginSchema), ctrlWrapper(ctrl.login));
router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));
router.post("/logout", auth, ctrlWrapper(ctrl.logout));

module.exports = router;