const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name:{
        type: String,
        required: 'Enter a name for the task'
    },
    Created_date:{
        type: Date,
        default: Date.now
    },
    status:{
        type: String,
        enum: ['pending','ongoing','completed'],
        default: 'pending'
    }
});

module.exports = mongoose.model('Task', TaskSchema);