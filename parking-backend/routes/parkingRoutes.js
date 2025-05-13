const express = require("express");
const router = express.Router();
const Parking = require("../model/parking");
const parkingController = require("../controller/parkingController");

router
  .route("/")
  .get(parkingController.getAllParkings)
  .post(parkingController.addCar);

router
  .route("/:id")
  .get(parkingController.getCarByNumber)
  .delete(parkingController.deleteCar)
  .patch(parkingController.updateCar);

module.exports = router;
