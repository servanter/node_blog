
/**
 * Module dependencies.
 */

var express = require('express')
      , routes = require('./routes')
      , ejs = require('ejs')
      , socketIo = require('socket.io');

    var app = module.exports = express.createServer();
    var io = socketIo.listen(app);
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
      app.use(express.cookieParser());
      app.use(express.session({secret:'keyboard cat'}));
      app.use(app.router);
      app.use('/public',express.static(__dirname + '/public'));
    });

    app.configure('development', function(){
      app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    });

    app.configure('production', function(){
      app.use(express.errorHandler());
    });
//创建全局变量 
    app.helpers({
        author:'beihe',
        myServer:'http://127.0.0.1:3000/public/'
})
// Routes
app.get('/', routes.index);
app.get('/index.html', routes.index);
app.get('/manage.html',routes.exec('manage'));
app.get('/login.html',routes.exec('login'));
app.get('/list?*', routes.exec('list'));
app.get('/article?*', routes.exec('article'));
app.get('*', routes.exec('404'));

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
var userNum = 0;
io.sockets.on('connection',function(socket){
    var user = 'user'+userNum++;
    socket.emit('init',{user:user});
    socket.on('send message',function(data){
        data.user = user;
        //socket.emit('add message',data);
        //socket.broadcast.emit('add message',data);
        io.sockets.emit('add message',data);
    });
})

