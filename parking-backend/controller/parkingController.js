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

exports.addCar = async (req, res) => {
  try {
    const existingCar = await Parking.findOne({
      carNumber: req.body.carNumber,
    });
    if (existingCar) {
      return res.status(400).json({
        status: "fail",
        message: "Car already exists",
      });
    }

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

exports.deleteCar = async (req, res) => {
  try {
    const carNumber = req.params.id;
    const car = await Parking.findOneAndDelete({ carNumber: carNumber });
    if (!car) {
      return res.status(404).json({
        status: "fail",
        message: "Car not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.updateCar = async (req, res) => {
  try {
    console.log("Params:", req.params);
    console.log("Request Body:", req.body);

    const carNumber = req.params.id;
    const updatedCar = await Parking.findOneAndUpdate(
      { carNumber: carNumber },
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedCar) {
      return res.status(404).json({
        status: "fail",
        message: "Car not found",
      });
    }

    console.log("Updated Car:", updatedCar);

    res.status(200).json({
      status: "success",
      data: {
        updatedCar,
      },
    });
  } catch (error) {
    console.error("Error in updateCar:", error.message);
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};
