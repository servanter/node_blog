var login = require('./login.js');

exports.index = function(req,res){
    if(req.session.logined||true){
        res.render('manage/manage',{
            title:'manage'
        });
    }else{
        login.index(req,res);
    }
}
