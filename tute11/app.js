const express = require('express')
const app = express()
const bodyparser = require('body-parser');

const bcrypt = require("bcrypt")

const users = []

app.use(bodyparser.urlencoded({ extended: true }));

app.post("/HTML", async (req, res) => {
    console.log(req.body);
    let userEmail = req.body.useremail;
    let userPassword = req.body.userpassword;

    console.log("Actual Password: " + userPassword);

    try {
        const hashedpassword = await bcript.hash(userPassword, 10);
        console.log("Hashed Password:" + hashedpassword);
        console.log("password:" + password);
        users.push({
            email: userEmail,
            password: hashedpassword,
        })
        console.log("User Array:" + json.stringify(users));
        res.redirect("/HTML")
    }
    catch(e){
      console.log(e);
      res.redirect("/HTML")
  }
})

app.get('/HTML', (req, res) => {
    res.render('HTML.ejs')
})

app.listen(5000, (err) => {
    if (err) {
        console.log(err);
    } else console.log("Server listernin port 5000!");
})