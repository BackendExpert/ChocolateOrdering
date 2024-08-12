const Item = require("../Models/Item");
const path = require('path');

const ItemController = {
    AddItems: async (req, res) => {
        const {
            ItemNumber,
            ItemName,
            ItemPrice,
            ItesmDesc,
            Stock
        } = req.body

        const image = req.file.path

        const checkItems = await Item.findOne({ ItemNumber: ItemNumber})

        if(checkItems){
            return res.json({ Error: "Item Already Exists" })
        }
        else{
            const AddItem = new Item({
                ItemNumber: ItemNumber,
                ItemImage: image,
                ItemName: ItemName,
                ItemPrice: ItemPrice,
                ItemDesc: ItesmDesc,
                Stock: Stock
            })

            const ResultItem = await AddItem.save()

            if(ResultItem){
                return res.json({ Status: "Success"})
            }
            else{
                return res.json({ Error: "Internal Server Error"})
            }
        }
    }
};

module.exports = ItemController;