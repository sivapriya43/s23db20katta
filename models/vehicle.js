const mongoose = require("mongoose")
const vehicleSchema = mongoose.Schema({
vehicle_type: String,
cost: Number,
company: String
})
module.exports = mongoose.model("Vehicle", 
vehicleSchema)