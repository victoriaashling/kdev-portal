const router = require("express").Router();
const drugController = require("../../controllers/drugController");

// Matches with "/api/blood"
router.route("/")
  .get(drugController.findAll);

module.exports = router;
