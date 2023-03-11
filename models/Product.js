// Model structure:
//  * Item type
//  * Name
//  * Color
//  * Item form
//  * Finish type
//  * Special feature
//  * Description
//  * Ingredients []
//  $ SchemaObject Ref {Brand} []

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    itemType: String,
    name: String,
    color: String,
    itemForm: String,
    finishType: String,
    specialFeature: String,
    description: String,
    ingredients: [String],

    brand: {
        type: Schema.Types.ObjectId, ref: 'Brand'
    },
    reviews: [{
        type: Schema.Types.ObjectId, ref: 'Review'
    }]
})
const Product = mongoose.model('Product', productSchema);

module.exports = Product;