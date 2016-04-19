var Member = require('../models/member.js');
var Reserve = require('../models/resinfo.js');

exports.login = function(req, res) {
	var flag=false;
  
	Member.findOne({ "id" : req.body.id, "pass" : req.body.pass}).select('id lv').exec(function(err, valid) {
		
		if (err){
			throw err;
		}
		if(valid){
			console.log(valid['id']);
		  req.session.user_id = valid['id'];
		  req.session.lv = valid['lv'];
			//req.session = valid;
			res.send(valid);
		}else{
			res.send('failed');
		}
		
	});
	
};

exports.signuppage = function(req, res){
	res.render('signuppage');
};

exports.signup=function(req,res,err){

    var member = new Member({"id":req.body.id,"pass":req.body.pass,"lv":req.body.lv});

    member.save(function(err,silence){

    	if(err){
    		console.err(err);
    		throw err;

    		}

    	res.send('success');

    });
};

exports.logout=function(req,res,err){
	if (req.session) {
		req.session.destroy(function() {});
	}
	res.send('destroyed');
};

exports.reservate=function(req,res){
	var reserve = new Reserve({
		"date" : req.body.date,
		"reservdate" : Date,
		"reservid" : req.session.user_id,
		"time" : req.body.time,
		"reservtime" : Date.now(),
		"patient_number" : req.body.patient_number,
		"patient_name" : req.body.patient_name,
		"description" : req.body.patient_name,
		"part" : req.body.part,
		"state" : '2',
		"cancel_state" : '',
		"cancel_id" : '',
		"mri_number" : String
	});
	
	reserve.save();
};
