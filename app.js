const express = require("express");
const compression = require("compression");

let mongooseOptions = {};

let app = express();

app.use(compression());

require("./routes.js")(app);

if(process.env.NODE_ENV === "production"){
    module.exports = app;
}else{
    app.listen(process.env.PORT);
}
