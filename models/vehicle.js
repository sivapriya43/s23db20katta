const mongoose = require("mongoose")

const vehicleSchema = mongoose.Schema({
  vehicle_type: String,
  cost: {
    type: Number,
    required: true,
    min: [1000, 'The cost must be at least 1000'], // Minimum cost allowed
    max: [100000, 'The cost must not exceed 100000'], // Maximum cost allowed
  },
  company: String
})

module.exports = mongoose.model("Vehicle", vehicleSchema)
