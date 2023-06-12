const express = require('express');
const {getShops} = require("../controllers/shopsService");
const {setShops} = require("../controllers/shopsService");

const shopsRouter = express.Router();



shopsRouter.post('/',  setShops);
shopsRouter.get('/getShops',  getShops);


module.exports = {
   shopsRouter
};
