const express = require("express");
const router = express.Router();
const Parking = require("../model/parking");
const parkingController = require("../controller/parkingController");

router
  .route("/")
  .get(parkingController.getAllParkings)
  .post(parkingController.addParking);

router.route("/:id").get(parkingController.getCarByNumber);

module.exports = router;
