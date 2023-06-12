const express = require('express');
const { setGoods, getGoods } = require("../controllers/goodsService");

const goodsRouter = express.Router();



goodsRouter.post('/',  setGoods);
goodsRouter.get('/getGoods',  getGoods);

module.exports = {
   goodsRouter
};
