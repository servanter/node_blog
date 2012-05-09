var socket = io.connect('http://10.16.38.106:3000');
var user = 'free';
socket.on('init',function(data){
//  socket.emit('my other event',{my:'data'});
    user = data.user;
});

$('#message-send').live('click',function(){
    socket.emit('send message',{message:$('#message-input').val()});
});

socket.on('add message',function(data){
    var html = '<dl class="mes-single"><dt class="mes-name">'+data.user+':</dt><dd class="mes-text">'+data.message+'</dd></dl>';
    $('.chat-box').append(html);
})
function addMessage(){

}
