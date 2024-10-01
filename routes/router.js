const express = require('express');
const router = express.Router();
const ramirez = require('../controller/Controller')

router.get('/', ramirez.fiel);
router.get('/about', ramirez.fiel1);
router.get('/service', ramirez.fiel2);
router.get('/contact', ramirez.fiel3);
router.get('/home', ramirez.fiel4);
module.exports = router;