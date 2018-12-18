const router = require("express").Router();
const rxController = require("../../controllers/rxControllers");

// Matches with "/api/rx"
router.route("/")
  .get(rxController.findAll)
  .post(rxController.create);

module.exports = router;