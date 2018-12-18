const router = require("express").Router();
const xRayController = require("../../controllers/xRayController");

// Matches with "/api/xRay"
router.route("/")
  .get(xRayController.findAll)

module.exports = router;
