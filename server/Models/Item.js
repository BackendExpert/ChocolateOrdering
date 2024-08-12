const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    ItemNumber: {
        type: String,
        required: true,
        unique:true,
    },
    ItemImage: {
        type: String,
        required: true,
    },
    ItemName: {
        type: String,
        required: true,
    },
    ItemPrice: {
        type: String,
        required: true,
    },
    ItemDesc: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;