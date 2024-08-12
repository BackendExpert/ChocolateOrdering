const express = require('express');
const ItemController = require('../Controllers/ItemController');

const router = express.Router();

router.post('/AddItems', ItemController.AddItems)

module.exports = router;