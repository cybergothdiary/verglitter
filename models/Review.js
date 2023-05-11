// Model structure:
//  * Rating
//  * Content
//  $ SchemaObject Ref {Product}

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    rating: Number,
    headline: String,
    content: String,

    product: {
        type: Schema.Types.ObjectId, ref: 'Product'
    }
})
const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;