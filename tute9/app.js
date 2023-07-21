const express = require('express');
const app = express();
const port = 80;

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