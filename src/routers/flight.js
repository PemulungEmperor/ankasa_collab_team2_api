const express = require("express");
const router = express.Router();
const { allFlight, addFlight, editFlight, deleteFlight, allFlightCity } = require("../controller/flight");
const multerUpload = require("../middleware/uploadProfile");

router.get("/flight", allFlight);
router.post("/add-flight", multerUpload, addFlight);
router.put("/edit-flight/:id", multerUpload, editFlight);
router.delete("/delete-flight/:id", deleteFlight);

//search by destination
router.get("/flight/:destination", allFlightCity);

module.exports = router;
