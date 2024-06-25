const express = require('express');
const path = require('path');
const app = express();


// const path = require('path');

app.use(express.static(path.join(__dirname, "node/EJSDir")));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render("instagram.ejs");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
