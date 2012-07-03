var mysql = require('mysql'),
    dbOption = require('./../blog_info.js').dbOption,
    client = null;

exports.index = function(req,res){
    client = mysql.createClient(dbOption);  
    client.query('SELECT * FROM blog_article',function(err,results,fields){
    
    }
    if(){
    
    }else{
    
    }
    res.render('login',{
        title:'login'
    });
}
