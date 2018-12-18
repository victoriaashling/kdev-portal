const router = require("express").Router();
const visitsController = require("../../controllers/visitsController");

// Matches with "/api/visits"
router.route("/")
  .get(visitsController.findAll)
  .post(visitsController.create);

// Matches with "/api/visits/:id"
router
  .route("/:id")
  .get(visitsController.findById)
  .put(visitsController.update)
  .delete(visitsController.remove);

module.exports = router;
