const express = require("express");
const compression = require("compression");
const mongoose = require("mongoose");

let mongooseOptions = {};

let mongoString = "mongodb://127.0.0.1/flashcards";

let app = express();

if(process.env.NODE_ENV == "production"){
    mongoString = `mongodb://website:${process.env.MONGODB_PASS}@127.0.0.1:27017/flashcards?authSource=admin`;
}

mongoose.connect(mongoString, mongooseOptions);

app.use(compression());

require("./routes.js")(app);

if(process.env.NODE_ENV === "production"){
    module.exports = app;
}else{
    app.listen(process.env.PORT);
}
