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
    client = mysql.createClient(db_options);  
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
