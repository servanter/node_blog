var login = require('./login.js');

exports.index = function(req,res){
    if(req.session.logined){
        res.render('manage',{
            title:'manage'
        });
    }else{
        login.index(req,res);
    }
}
