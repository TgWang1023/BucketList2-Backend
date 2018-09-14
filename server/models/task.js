module.exports = function(mongoose){
    const taskSchema = new mongoose.Schema({
        objective: {type: String},
        createdAt: {type: Date, default: Date.now}
    }); 
    mongoose.model('Task', taskSchema);
}