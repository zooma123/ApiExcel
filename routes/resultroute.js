const { readExcelController } = require('../controller/excelController.js');

const express = require('express');

const router = express.Router();

router.get('/readExcel', readExcelController);

module.exports = router;