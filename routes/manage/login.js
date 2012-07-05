var mysql = require('mysql'),
    dbOption = require('../../blog_info.js').dbOption,
    client = null;

exports.index = function(req,res){
    console.log(req.body);
    if(req.body.userName){
        client = mysql.createClient(dbOption);  
        client.query('SELECT * FROM blog_user where u_user="' + req.body.userName + '" and u_password="' + req.body.userPWD +'"',function(err,results,fields){
            if(err){
                console.log(err);         
                res.render('login',{
                    title:'login'
                });
                return;
            }
            console.log(results);
            if(results.length > 0){
                req.session.logined = true;
                res.redirect('/manage/manage.html');
            }else{
                res.render('login',{
                    title:'xinxicuowu'
                });
            }
        });
    }else{
        res.render('manage/login',{
           title:'login_manage'
        });
        
    }
}
