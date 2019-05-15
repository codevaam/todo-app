var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

//Set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./assets'))

//fire controllers
todoController(app);

//listen to port
app.listen(3000);
console.log('listening to port 3000')
