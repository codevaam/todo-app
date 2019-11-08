var express = require('express');
var todoController = require('./controllers/todoController');
const PORT = process.env.PORT || 5000

var app = express();

//Set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./assets'))
app.use(express.static('./static'))
//fire controllers
todoController(app);

//listen to port
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
