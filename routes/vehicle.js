var express = require('express');
const vehicle_controlers= require('../controllers/vehicle');
var router = express.Router();
/* GET vehicles */
router.get('/', vehicle_controlers.vehicle_view_all_Page );
module.exports = router;