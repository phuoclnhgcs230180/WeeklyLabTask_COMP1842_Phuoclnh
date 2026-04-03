const mongoose = require('mongoose'),
    Task = mongoose.model('Task');

exports.list_all_tasks = function(req, res) {
    Task.find({})
        .then(tasks => res.json(tasks))
        .catch(err => res.send(err));
};

exports.create_a_task = function(req, res) {
    var new_task = new Task(req.body);
    new_task.save()
        .then(task => res.json(task))
        .catch(err => res.send(err));
};

exports.read_a_task = function(req, res) {
    Task.findById(req.params.taskId)
        .then(task => res.json(task))
        .catch(err => res.send(err));
};

exports.update_a_task = function(req, res) {
    Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true})
        .then(task => res.json(task))
        .catch(err => res.send(err));
};

exports.delete_a_task = function(req, res) {
    Task.deleteOne({_id: req.params.taskId})
        .then(() => res.json({message: 'Task successfully deleted'}))
        .catch(err => res.send(err));
};
