

const express = require('express');
const bodyParser= require('body-parser')
const app = express();
const path = require('path');


        app.set('view engine', 'ejs') 
        
        // Make sure you place body-parser before your CRUD handlers!
        app.use(bodyParser.urlencoded({ extended: true }))

        // To make the 'public' folder accessible to the public
        app.use(express.static('public'))
        app.use('/css', express.static(__dirname +'/public/css'))
        app.use('/img', express.static(__dirname +'/public/img'))
        app.use('/js', express.static(__dirname +'/public/js'))


// Routing
app.get('/', (req, res) => {
    res.render('index.ejs')
});

app.get('/index2.ejs', (req, res) => {
    res.render('index2.ejs')
});

app.listen(3000, () => console.log('Listening on port 3000'));


