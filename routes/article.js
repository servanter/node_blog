var mysql = require('mysql'),
    dbOption = require('./../blog_info.js').dbOption,
    client = null;

exports.index = function(req,res){
    client = mysql.createClient(dbOption);  
    client.query('SELECT * FROM blog_article where a_id = ' + req.query.aid,function(err,results,fields){
       if(err){
           throw err;
       }
       client.end();
       if(results.length > 0){
           res.render('article',{
                title:'article',
                dbdata:results[0],
                hello:'test'
           })
       }else{
           res.render('404',{
                title:'404',
                hello:'test'
            })
       }
    });
}
