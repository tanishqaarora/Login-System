const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT||3000;

app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// load static assets
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

// home route
app.get('/', (req, res) => {
    res.render('home', {title: 'Login System'});
})

app.listen(port, () => console.log('Our Server is running...'));