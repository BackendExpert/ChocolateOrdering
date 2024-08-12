const Item = require("../Models/Item");
const path = require('path');

const ItemController = {
    AddItems: async (req, res) => {
        const {
            ItemNumber,
            ItemName,
            ItemPrice,
            ItesmDesc
        } = req.body

        const image = req.file.path

        const checkItems = await Item.findOne({ ItemNumber: ItemNumber})

        if(checkItems){
            return res.json({ Error: "Item Already Exists" })
        }
        else{
            return res.json({ Status: "Success"})
        }
    }
};

module.exports = ItemController;