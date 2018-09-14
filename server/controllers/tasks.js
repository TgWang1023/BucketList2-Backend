const mongoose = require('mongoose');
const Task = mongoose.model('Task');

module.exports = {
    all: function(req, res) {
        Task.find({}, function(err, task) {
            if(err) {
                console.log('Something went wrong when getting tasks');
                res.json({messgae: 'Error', error: err});
            } else {
                res.json({message: 'Success', data: task});
            }
        });
    }, 
    one: function(req, res) {
        Task.findById(req.params.id, function(err, task) {
            if(err) {
                console.log('Something went wrong when getting a task by id');
                res.json({messgae: 'Error', error: err});
            } else {
                res.json({message: 'Success', data: task});
            }
        });
    },
    new: function(req, res) {
        const task = new Task(req.body)
        task.save(function(err) {
            if(err) {
                console.log('Something went wrong when adding a task');
                res.json({message: 'Error', error: err});
            } else {
                Task.find({_id: task._id}, function(err, task) {
                    if (err) {
                        console.log('Something went wrong when getting a task by id');
                        res.json({messgae: 'Error', error: err});
                    } else {
                        res.json({message: 'Success', data: task});
                    }
                });
            }
        });
    },
    edit: function(req, res) {
        Task.findByIdAndUpdate(req.params.id, req.body, function(err, task) {
            if(err) {
                console.log("Something went wrong when editing a task by id")
                res.json({messgae: 'Error', error: err});
            } else {
                res.json({message: 'Success', data: task});
            }
        });
    }, 
    remove: function(req, res) {
        Task.findByIdAndRemove(req.params.id, function(err, task) {
            if(err) {
                console.log("Something went wrong when remove a task by id")
                res.json({messgae: 'Error', error: err});
            } else {
                res.json({message: 'Success', data: task});
            }
        });
    }
};