var express = require('express');
var app = express();
var port = 3000;
var itemRouter = require('./src/routes/itemRoutes');

app.listen(port, function(){
    console.log('server is running on port:', port);
})
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use('/items', itemRouter);

app.get('/', function(req, res){
    res.send('hey there, in express');
});