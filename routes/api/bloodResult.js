const router = require("express").Router();
const bloodController = require("../../controllers/bloodController");

// Matches with "/api/blood"
router.route("/")
  .get(bloodController.findAll);

module.exports = router;
