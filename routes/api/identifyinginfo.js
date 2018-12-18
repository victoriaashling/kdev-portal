const router = require("express").Router();
const formController = require("../../controllers/formController");

router.route("/")
  .post(formController.create)
  
router.route("/:id")
  .get(formController.findCurrentProfile)
  .put(formController.update)

module.exports = router;