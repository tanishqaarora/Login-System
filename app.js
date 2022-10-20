const express = require('express');
const app = express();

const port = process.env.PORT||3000;

app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// home route
app.get('/', (req, res) => {
    res.render('home', {title: 'Login System'});
})

app.listen(port, () => console.log('Our Server is running...'));