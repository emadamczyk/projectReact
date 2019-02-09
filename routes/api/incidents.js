const router = require("express").Router();
const axios = require("axios");
const incidentsController = require("../../controllers/incidentsController");

// Matches with "/api/incidents"
router.route("/")
  .get(incidentsController.findAll)
  .post(incidentsController.create);

// Matches with "/api/incidents/:id"
router
  .route("/:id")
  .get(incidentsController.findById)
  .put(incidentsController.update)
  .delete(incidentsController.remove);

module.exports = router;




