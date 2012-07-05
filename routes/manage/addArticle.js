var login = require('./login.js');
var mysql = require('mysql'),
    dbOption = require('../../blog_info.js').dbOption,
    client = null;

exports.index = function(req,res){
    if(req.session.logined||true){
        console.log(req.body);
        if(req.body.articleName){
            client = mysql.createClient(dbOption);  
            client.query('insert into blog_article(group_id,a_author,a_title,a_content) values("1","'+'beihe","' + req.body.articleName  +'","' + req.body.articleContent +'");',function(err,results,fields){
                if(err){
                    console.log(err);         
                    res.render('login',{
                        title:'login'
                    });
                    return;
                }
            }) 
        }else{
            
        }         
        res.render('manage/addArticle',{
            title:'addArticle'
        });
    }else{
        login.index(req,res);
    }
}
