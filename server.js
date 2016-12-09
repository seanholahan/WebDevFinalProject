/**
 * Created by willqueen on 12/8/16.
 */
var express = require('express');
var app = express();



var bodyParser = require('body-parser');
app.use(bodyParser.json({type: 'website/json'}));
app.use(bodyParser.urlencoded({ extended: true }));

// configure a public directory to host static content
app.use(express.static(__dirname + '/public'));

// require ("./test/app.js")(app);

require("./assignment/app.js")(app);
require("./ejs/hello/app.js")(app);

var websites = [
    {_id: 321, name: 'facebook.com', uid: 123},
    {_id: 432, name: 'wikipedia.org', uid: 123},
    {_id: 543, name: 'twitter.com', uid: 234}
];

app.get("/products", function(req, res){
    res.send(products);
});


require("./ejs/forms/app")(app);

require("./ejs/math/app")(app);

// require("./sandbox/websites/model/test.model.server")(app);

var ipaddress = process.env.OPENSHIFT_NODEJS_IP;
var port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port, ipaddress);