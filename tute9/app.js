const express = require('express');
const path = require('path');
const app = express();
const port = 80;

//Serving the static files
app.use('/static', express.static('static'))

//set the templet engin pug
app.set('vies engine', 'pug')

//set the views directory
app.set('views', path.join(__dirname, 'views'));

//our pug end point
app.get("/demo", (req, res) => {
    res.status(404).render('demo', { title: 'Hey sanket', message:'Hello World'})
});


app.get('/', (req, res) => {
    res.status(404).send("This is 404 server run");
});
app.get("/about",(req,res)=>{
    res.send('This is the Exprss js');
});
app.get("/thankyou",(req,res)=>{
    res.send('Thankyou for visite the page');
});

app.listen(port, ()=>{
    console.log(`The aplication listern in port ${port}`);
});
