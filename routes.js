const {Eta} = require("eta");
let eta = new Eta({views: `${__dirname}/views`});

module.exports = (app)=>{
    app.get("/", (req, res)=>res.send(eta.render("landing.eta")));
}
