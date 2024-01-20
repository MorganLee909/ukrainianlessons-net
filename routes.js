const {Eta} = require("eta");
let eta = new Eta({views: `${__dirname}/views`});

module.exports = (app)=>{
    let views = `${__dirname}/views/`;

    //IMAGES
    app.get("/img/flag", (req, res)=>res.sendFile(`${views}/img/flag.png`));

    //OTHER
    app.get("/", (req, res)=>res.send(eta.render("landing.eta")));
    app.get("/verbs", (req, res)=>res.send(eta.render("verbs.eta")));
    app.get("*", (req, res)=>res.send(eta.render("404.eta")));
}
