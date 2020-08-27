const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
  {
    name: { type: String },
    Make: { type: String },
    Model: { type: String },
    Price: { type: Number },
    Mileage: { type: Number },
    EngineSize: { type: Number },
    Transmision: { type: String },
    OdoMeter: { type: String },
    Interior: { type: String },
    ExtColour: { type: String },
    Body: { type: String },
    FuelType: { type: String },
    message: { type: String },
  },
  {
    timestamps: true,
  }
);

const CarBuy = mongoose.model("CarBuy", exerciseSchema);

module.exports = CarBuy;
