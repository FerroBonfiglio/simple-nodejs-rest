const express       = require('express');
const app           = express();
const mongoose      = require('mongoose');
const bodyParser    = require('body-parser');
require('dotenv/config');

// MIDDLE WARE
app.use(bodyParser.json());

// ROUTES
const postRoutes = require('./routes/blog');
app.use('/blog', postRoutes);

app.get('/', (req, res) => {
    res.send('Hello world');
});

// CONNECT WITH DATABASE
mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    () => console.log('Connected with database!'
));

app.listen(3000);