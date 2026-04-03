const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
global.Vocab = require('./api/models/vocabModel');
const routes = require('./api/routes/vocabRoutes');
mongoose.connect('mongodb://localhost/vocab-builder')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB:', err);
        process.exit(1);
    });
const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
routes(app);
app.listen(port);
app.use((req, res) => {
    res.status(404).send({url: req.originalUrl + ' not found'})
});
console.log('Vocab Builder RESTful API server started on: ' + port);