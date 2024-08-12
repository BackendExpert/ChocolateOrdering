const Item = require("../Models/Item");
const path = require('path');

const ItemController = {
    AddItems: async (req, res) => {
        const {
            ItemNumber,
            ItemName,
            ItemPrice,
            ItemDesc
        } = req.body

        const Itemimg = req.file.path

        // console.log(req.body, Itemimg)


        const checkItems = await Item.find({ ItemNumber: ItemNumber})

        if(checkItems) {
            return res.json({ Error: "Item Already Exists"})
        }
        else{
            const NewItems = new Item({
                ItemNumber: ItemNumber,
                ItemName: ItemName,
                ItemPrice: ItemPrice,
                ItemDesc: ItemDesc,
                ItemImage: Itemimg
            })

            const NewItemsResult = await NewItems.save()

            if(NewItemsResult){
                return res.json({ Status: "Success" })
            }
            else{
                return res.json({ Error: "Internal Server Error"})
            }
        }

    }
};

module.exports = ItemController;