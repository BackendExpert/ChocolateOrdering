const Item = require("../Models/Item");

const defaultController = {
    AddItems: async (req, res) => {
        const {
            ItemNumber,
            ItemName,
            ItemPrice,
            ItemDesc
        } = req.body

        console.log(req.body)


        // const checkItems = await Item.find({ ItemNumber: ItemNumber})

        // if(checkItems) {
        //     return res.json({ Error: "Item Already Exists"})
        // }
        // else{
        //     console.log()
        // }

    }
};

module.exports = defaultController;