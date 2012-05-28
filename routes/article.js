var mysql = require('mysql'),
    client = null;  

var db_options = {  
    host: 'localhost',  
    port: 3306,  
    user: 'root',  
    password: '900131', 
    database: 'blog'  
}; 

exports.index = function(req,res){
    //console.log(req.query);
    client = mysql.createClient(db_options);  
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
