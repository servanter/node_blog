
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { 
    title: 'Expressa',
    hello:'hello'
  })
};

exports.exec = function(action){
    var oo = require('./'+action+'.js');
    return oo.index;
}

