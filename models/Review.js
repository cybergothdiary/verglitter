// Model structure:
//  * Rating
//  * Content
//  $ SchemaObject Ref {Product}

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    rating: Number,
    content: String,

    product: {
        type: Schema.Types.ObjectId, ref: 'Product'
    }
})