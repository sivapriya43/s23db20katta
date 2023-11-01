const express = require('express');
const router = express.Router();

// Sample data for vehicles
const vehiclesData = [
  { vehicle_name: 'vehicle A', vehicle_type: '2-weeler', cost: '3000', company: 'company 1' },
  { vehicle_name: 'vehicle B', vehicle_type: '4-weeler', cost: '55555', company: 'company 2' },
  { vehicle_name: 'vehicle C', vehicle_type: 'truck', cost: '7575', company: 'company 3' },
  // Add more vehicle data here
];

router.get('/', (req, res) => {
  // Render the 'vehicles' Pug template with the vehicle data
  res.render('vehicle', { title: 'Search Results - vehicles', results: vehiclesData });

});

module.exports = router;