// Model structure:
//  * Name; * Founded in; * Country; * Previously known as[]; $ SchemaObject Ref {Products}[];

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const brandSchema = new Schema({
    name: String,
    foundedIn: Number,
    country: String,
    prevKnownAs: [String],

    products: {
        type: Schema.Types.ObjectId, ref: 'Product'
    }
});
const Brand = mongoose.model('Brand', brandSchema);
module.exports = Brand;