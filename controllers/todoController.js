var bodyParser = require('body-parser')
var mongoose = require('mongoose')

//connect to the database
mongoose.connect('mongodb://test:test123@ds153906.mlab.com:53906/todo')

//create schema - blueprint
var todoSchema = new mongoose.Schema({
    item: String
});

var Todo = mongoose.model('Todo', todoSchema);
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
    app.get('/todo', function(req, res){
        data = Todo.find({}, function(err, data){
            res.render('todo', {todos: data});
        });
    });

    app.post('/todo', urlencodedParser, function(req, res){
        //get data from the veiw and add to mongo
        var newTodo = Todo(req.body).save(function(err, data){
            if(err) throw err;
            res.json(data);
        })
    });

    app.delete('/todo/:item', function(req, res){
        //delete the reqested item
        Todo.find({item: req.params.item.replace(/\-/g, ' ')}).deleteOne(function(err, data){
            if(err) throw err;
            res.json(data);
        })
    });
};
