const mongoose = require('mongoose');

const Goods = mongoose.model('goods', {
  id:{
    type: Number,
    required:false

  },
  count:{
    type: Number,
    required:true

  },
  title:{
    type: String,
    required:true

  },
  image: {
    type: String,
    required:true,
  },
  price:{
    type: Number,
    required:true,

  },
  idShop:{
    type: String,
    required:true
  },
});

module.exports = {
  Goods ,
};
