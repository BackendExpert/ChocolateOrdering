const express = require('express');
const ItemController = require('../Controllers/ItemController');
const multer = require('multer');
const path = require('path');

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}${path.extname(file.originalname)}`);
    },
});

const upload = multer({ storage });

router.post('/AddItems', upload.single('image'), ItemController.AddItems)
router.get('/CoutItems', ItemController.CountItems)
router.get('/GetAllItems', ItemController.AllItemsGet)

module.exports = router;