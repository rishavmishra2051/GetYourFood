const mongoose = require('mongoose')

const { Schema } = mongoose;

const ItemSchema = new Schema({
    CategoryName: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: false
    },
    img: {
        type: String,
        required: false
    },
    price: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },

});

module.exports = mongoose.model('item', ItemSchema)
/*options: [{
  half:{ type: Number, required:false },
  full:{ type: Number, required:false },
  regular:{ type: Number, required:false },
  small:{ type: Number, required:false },
  medium:{ type: Number, required:false },
  large:{ type: Number, required:false },required:false
}
],
cost:{
type:String,
required:false
},*/