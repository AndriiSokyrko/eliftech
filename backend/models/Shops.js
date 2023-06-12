const mongoose = require('mongoose');

const Shops = mongoose.model('Shops', {
  id:{
    type: String,
    required:false

  },
  title:{
    type: String,
    required:true

  },

});

module.exports = {
  Shops ,
};
