const Item = require("../Models/Item");

const ItemController = {
    AddItems: async (req, res) => {
        const {
            ItemNumber,
            ItemName,
            ItemPrice,
            ItemDesc
        } = req.body

        // console.log(req.body)


        const checkItems = await Item.find({ ItemNumber: ItemNumber})

        if(checkItems) {
            return res.json({ Error: "Item Already Exists"})
        }
        else{
            const NewItems = new Item({
                ItemNumber: ItemNumber,
                ItemName: ItemName,
                ItemPrice: ItemPrice,
                ItemDesc: ItemDesc
            })
        }

    }
};

module.exports = ItemController;