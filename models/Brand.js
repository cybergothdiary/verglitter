// Model structure:
//  * Name; * Founded in; * Country; $ SchemaObject Ref {Products}[];

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const brandSchema = new Schema({
    name: String,
    imageUrl: String,
    foundedIn: Number,
    country: String,

    products: {
        type: Schema.Types.ObjectId, ref: 'Product'
    }
});
const Brand = mongoose.model('Brand', brandSchema);
module.exports = Brand;