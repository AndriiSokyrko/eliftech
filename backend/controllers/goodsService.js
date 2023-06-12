const { Goods } = require('../models/goods');
const Joi = require('joi');
const db = require("../models/goods");

const goods = [
    {"id": 1, "title": "pizza1", image: "depositphotos_4.jpg", price: 888, idShop: '001',count:1},
    {"id": 2, "title": "burger1", image: "depositphotos_4.jpg", price: 888, idShop: '001',count:1},
    {"id": 3, "title": "ice cream1", image: "depositphotos_4.jpg", price: 888, idShop: '001',count:1},
    {"id": 4, "title": "pizza2", image: "photomaska.jpg", price: 777, idShop: '002',count:1},
    {"id": 5, "title": "burger2", image: "photomaska.jpg", price: 777, idShop: '002',count:1},
    {"id": 6, "title": "ice cream2", image: "photomaska.jpg", price: 777, idShop: '002',count:1},
    {"id": 7, "title": "pizza3", image: "photomaska1.jpg", price: 666, idShop: '003',count:1},
    {"id": 8, "title": "burger3", image: "photomaska1.jpg", price: 666, idShop: '003',count:1},
    {"id": 9, "title": "ice cream3", image: "photomaska1.jpg", price: 666, idShop: '003',count:1},

]

const setGoods = async (req, res) => {
    try {
        if(!Goods.find({}).length ){
            Goods.insertMany(goods).then(() => res.json({
                code: 'Ok'
            } ))
            return
        }

        return res.status(200).json(
            {
                "goods":
                goods
            }
        );
    } catch (e) {
        return res.status(500).json({ message: res.message});
    }

}
const getGoods = async (req, res) => {
    try {
        const goods = await Goods.find({})
        if(!goods.length ){
            return res.status(200).json(
                {
                    "message":
                        "No goods"
                }
            );
        }

        return res.status(200).json(
            {
                "goods":
                goods
            }
        );
    } catch (e) {
        return res.status(500).json({ message: res.message});
    }
}
module.exports = {
  setGoods,
    getGoods
};
