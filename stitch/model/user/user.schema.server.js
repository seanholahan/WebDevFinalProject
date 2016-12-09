/**
 * Created by willqueen on 12/8/16.
 */
module.exports = function() {
    var mongoose = require("mongoose");
    //var ProductSchema = require("../product/product.schema.server")
    var UserSchema = mongoose.Schema({
        username: {type: String, required: true},
        password: {type: String, required: true},
        passwordVerify: {type: String, required: true},
        firstName: String,
        email: String,
        products: [{type: mongoose.Schema.Types.ObjectId, ref: 'ProductModel'}],
        dateCreated: {type: Date, default: (new Date()).getTime()},
    }, {collection: 'stitchUser'});

    var UserModel = mongoose.model("UserModel", UserSchema);

    return UserSchema;
}