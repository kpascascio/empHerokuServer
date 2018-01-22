var express = require('express');
var app = express();
var http = require('http').Server(app);


app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

http.listen(process.env.PORT || 3000, () => {
    console.log(`Ther server is running on port ${process.env.PORT}`);
})