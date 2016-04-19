var mongoose = require('mongoose')
, Schema = mongoose.Schema;

var memberSchema = new Schema({
	id : {type:String},
	pass : {type:String},
	lv : {type:String}
});

module.exports = mongoose.model('members', memberSchema);