const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('instagram.ejs');
});

// app.get("/ig/:username",(req,res) =>{
//     let {username}=req.params;
//     res.render("instagram.ejs" ,{username});
//   //   console.log(username);
//   })
  

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
