const {Shops} = require("../models/Shops");

const shops = [
    {"title": "mc.Donald1",id:'001' },
    {"title": "mc.Donald2",id:'002' },
    {"title": "mc.Donald3",id:'003' },
]

const setShops = async (req, res) => {
    try {
        if(!Shops.find({}).length ){
            console.log('empty')
            Shops.insertMany(shops).then(() => res.json({
                code: 'Ok'
            } ))
            return
        }

        return res.status(200).json(
            {
                "shops":
                shops
            }
        );
    } catch (e) {
        return res.status(500).json({ message: res.message});
    }
}
const getShops = async (req, res) => {
    try {
        const shops = await Shops.find({})
        if(!shops.length ){
            return res.status(200).json(
                {
                    "message":
                    "No shops"
                }
            );
        }

        return res.status(200).json(
            {
                "shops":
                shops
            }
        );
    } catch (e) {
        return res.status(500).json({ message: res.message});
    }
}


module.exports = {
  setShops,
  getShops
};
