var login = require('./login.js');

exports.index = function(req,res){
    if(req.session.logged){
        res.render('manage',{
            title:'manage'
        });
    }else{
        login.index(req,res);
    }
}
