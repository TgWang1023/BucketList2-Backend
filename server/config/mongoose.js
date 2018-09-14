module.exports = function(){
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/bucket_list');
    require('../models/task.js')(mongoose);
};