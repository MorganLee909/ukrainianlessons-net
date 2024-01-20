const {Eta} = require("eta");
let eta = new Eta({views: `${__dirname}/views`});

module.exports = (app)=>{
    let views = `${__dirname}/views/`;

    //IMAGES
    app.get("/img/flag", (req, res)=>res.sendFile(`${views}/img/flag.png`));

    app.get("/", (req, res)=>res.send(eta.render("landing.eta")));
}
