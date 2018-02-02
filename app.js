const express = require("express");
const app = express();

const logger = require('morgan');
app.use(logger('dev'));


app.get('/api/test', (req, res) => {
    res.json({
        greeting: "Hello World"
    });
});

app.get('/api/person', (req, res) => {
    res.json({
        navn: "Andreas",
        efternavn: "Bosch",
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