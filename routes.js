const {Eta} = require("eta");
let eta = new Eta({views: `${__dirname}/views`});

module.exports = (app)=>{
    let views = `${__dirname}/views/`;

    //IMAGES
    app.get("/img/flag", (req, res)=>res.sendFile(`${views}/img/flag.png`));

    //WORDS
    app.get('/words/:word', (req, res)=>res.send(eta.render(`words/word.eta`, {word: req.params.word})));

    //WORDLISTS
    app.get("/wordlist/:name", (req, res)=>res.send(eta.render(`wordLists/${req.params.name}.eta`)));

    //LESSONS
    app.get("/gender", (req, res)=>res.send(eta.render("gender.eta")));
    app.get("/verbs", (req, res)=>res.send(eta.render("verbs.eta")));
    app.get("/numbers", (req, res)=>res.send(eta.render("numbers.eta")));
    app.get("/basic-phrases", (req, res)=>res.send(eta.render("basicPhrases.eta")));

    //OTHER
    app.get("/", (req, res)=>res.send(eta.render("landing.eta")));
    app.get("*", (req, res)=>res.send(eta.render("404.eta")));
}
