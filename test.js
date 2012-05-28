var mysql = require('mysql'),
    client = null;  

var db_options = {  
    host: 'localhost',  
    port: 3306,  
    user: 'root',  
    password: '900131', 
    database: 'blog'  
}; 

if(mysql.createClient) {  
    client = mysql.createClient(db_options);  
} else {  
    client = new mysql.Client(db_options);  
    client.connect(function(err) {  
        if(err) {  
            console.error('connect db ' + client.host + ' error: ' + err);  
            process.exit();  
        }  
    });  
}


client.query('SELECT * FROM blog_article',function(err,results,fields){
    if(err){
        throw err;
    }
    console.log(results);
    console.log('---------------------');
    console.log(fields);
    client.end();
});

