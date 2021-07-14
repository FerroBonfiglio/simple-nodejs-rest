const express   = require('express');
const app       = express();
const mongoose  = require('mongoose');
require('dotenv/config');

app.get('/', (req, res) => {
    res.send('Hello world');
});

// connect with DB
mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    () => console.log('Connected with database!'
));


app.listen(3000);