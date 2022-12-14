const express = require("express");

const ctrl = require("../../controllers");

const { ctrlWrapper } = require("../../helpers");

const { isValidId } = require("../../middlewares");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.events.listEvents));

router.post("/", ctrlWrapper(ctrl.events.addEvent));

router.delete("/:id", isValidId, ctrlWrapper(ctrl.events.removeEvent));

router.put("/:id", isValidId, ctrlWrapper(ctrl.events.updateEvent));

module.exports = router;
