const { Schema } = require("mongoose"); //require schema

const HoldingsSchema = new Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
}); //name of schema

module.exports = { HoldingsSchema };
