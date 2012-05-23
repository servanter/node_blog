exports.index = function(req,res){
    console.log('list');
    res.render('layout',{
        title:'list',
        layout:true
    })
}
