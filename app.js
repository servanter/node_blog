
/**
 * Module dependencies.
 */

var express = require('express')
      , routes = require('./routes')
      , ejs = require('ejs');

    var app = module.exports = express.createServer();

    // Configuration

    app.configure(function(){
      app.set('views', __dirname + '/views');
      app.set('view engine', 'ejs');
      app.set('view options',{
        layout:false
      });
      app.register("html", ejs);
      app.register("ejs", ejs);
      app.use(express.bodyParser());
      app.use(express.methodOverride());
      app.use(app.router);
      app.use('/public',express.static(__dirname + '/public'));
    });

    app.configure('development', function(){
      app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    });

    app.configure('production', function(){
      app.use(express.errorHandler());
    });

    app.helpers({
      author:'做最有价值的前端技术社',
      myServer:'http://127.0.0.1:3000/public/'
})
// Routes
app.get('/', routes.index);
app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
