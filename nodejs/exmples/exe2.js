const express = require('express');
const app = express();


app.get('/',function(req, res) {
    res.sendFile(__dirname + '/home.html');
    res.send()
});

app.listen(8888)