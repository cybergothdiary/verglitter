// Model structure:
//  * Name !! REQUIRED
//  * Item type !! REQUIRED
//  * Skin type !! REQUIRED
//  * Color !! REQUIRED
//  * Image URL !! Required
//  * Finish type !! REQUIRED
//  * Volume !! REQUIRED
//  * Description

//  * Ingredients [] !! REQUIRED
//  $ SchemaObject Ref {Brand} []

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String, // required
    itemType: { //required
        enum: ['Eyeliner', 'Pomade', 'Cream']
    },
    skinType: { // required
        enum: ['All', 'Normal', 'Sensitive', 'Combinated']
    },
    color: String, // required
    imageUrl: String, // required
    finishType: String, // required
    volume: String, // required
    description: String, // optional
    ingredients: String,

    brand: {
        type: Schema.Types.ObjectId, ref: 'Brand'
    },
    reviews: [{
        type: Schema.Types.ObjectId, ref: 'Review'
    }]
})
const Product = mongoose.model('Product', productSchema);

module.exports = Product;