const express = require("express");
const app = express();
const bodyParser = require('body-parser');


const logger = require('morgan');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/api/test/:id', (req, res) => {
    console.log(req.query);
    res.json({ text: "Hello Worlds, et eller andet"});
 });

app.get('/api/person', (req, res) => {
    res.json({
        navn: "Andreas",
        efternavn: "Bosch",d
        by: "Frederiksberg",
        alder: 19,
    });
});

app.get('/api/color', (req, res) => {
    res.json({
        color: "Red"
    });
});

app.get('/api/faxe', (req, res) => {
    res.json({
        drik: "Faxe kondi",
        version: "booster"
    });
});





app.use(express.static('public'));

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('App is listening on http://localhost:3000');
});