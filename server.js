const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const menuRoutes = require('./routes/menuRoutes');
const db = require('./config/db'); 

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(menuRoutes);

app.listen(PORT, () => {
    console.log(`Сервер запущено на http://localhost:${PORT}`);
});
