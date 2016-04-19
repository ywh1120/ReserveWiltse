var mongoose = require('mongoose')
, Schema = mongoose.Schema;

var resSchema = new Schema({
	date : Date,
	reservdate : Date,
	reservid : String,
	time : String,
	reservtime : String,
	patient_number : String,
	patient_name : String,
	description : String,
	part : String,
	state : String,
	cancel_state : String,
	cancel_id : String,
	mri_number : String
}); 