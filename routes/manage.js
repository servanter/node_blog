var login = require('login'):
exports.index = function(req,res){
    if(req.session.logged){
        res.render('login',{
            title:'login'
        });
    }else{
        login.index();
    }
}
