const tasks = require('../controllers/tasks.js');

module.exports = function(app){
    app.get('/tasks', function(req, res){
        tasks.all(req, res);
    });
    app.get('/tasks/:id', function(req, res){
        tasks.one(req, res);
    });
    app.post('/tasks', function(req, res){
        tasks.new(req, res);
    });
    app.put('/tasks/:id', function(req, res){
        tasks.edit(req, res);
    });
    app.delete('/tasks/:id', function(req, res){
        tasks.remove(req, res);
    });
};