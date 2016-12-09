
/**
 * Created by willqueen on 12/8/16.
 */

module.exports = function(app) {

    var model = require("./model/model.server.js")();
    require("./services/user.service.server.js")(app, model);
    //require("./services/product.service.server.js")(app, model);

};