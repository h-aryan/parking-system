const Parking = require("../model/parking");

exports.getAllParkings = async (req, res) => {
  try {
    const parkings = await Parking.find();
    res.status(200).json({
      status: "success",
      data: {
        parkings,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.getCarByNumber = async (req, res) => {
  try {
    const carNumber = req.params.id;
    const car = await Parking.findOne({ carNumber: carNumber });
    if (!car) {
      return res.status(404).json({
        status: "fail",
        message: "Car not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        car,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.addParking = async (req, res) => {
  try {
    const newCar = await Parking.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        newCar,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};
