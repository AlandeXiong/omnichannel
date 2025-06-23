
const express = require("express");
const app = express();
const path = require('path');


app.use(express.json());

const publicRouter = require('./routes/publickey');
const privateRouter = require('./routes/privatekey');

app.use('/publickey', publicRouter);
app.use('/privatekey', privateRouter);

app.get("/", (req, res) => {
    //res.send("Hello, World");
    res.sendFile(path.join(__dirname, '/views/chatwidget.html'));
});



app.listen(process.env.PORT || 900, () => {
    console.log("Server is running on port " + (process.env.PORT || 900));
});