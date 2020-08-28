const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ToolSchema = new Schema({
    title: String,

})

const Tool = mongoose.model('Tool', ToolSchema);

module.exports = Tool;