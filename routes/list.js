var mysql = require('mysql'),
    dbOption = require('./../blog_info.js').dbOption,
    client = null;

exports.index = function(req,res){
    console.log(dbOption);
    client = mysql.createClient(dbOption);  
    client.query('SELECT * FROM blog_article',function(err,results,fields){
       if(err){
           throw err;
       }
       client.end();
       console.log(results);
       if(results.length > 0){
           res.render('list',{
                title:'list',
                dbdata:results,
                hello:'test'
           })
       }else{
           res.render('404',{
                title:'404',
                hello:'test'
            })
       }
    })
}
