const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const parkingRoutes = require("./routes/parkingRoutes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/api/parking", parkingRoutes);

module.exports = app;
