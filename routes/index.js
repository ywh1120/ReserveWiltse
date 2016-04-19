
/*
 * GET home page.
 */

exports.index = function(req, res){
	if(req.session.user_id == null && req.session.lv == null)
		res.render('index', { 'title': 'WiltseReservateSystem'});
	else
		res.render('index', {'title': 'WiltseReservateSystem','user_id':req.session.user_id, 'lv':req.session.lv});
};
