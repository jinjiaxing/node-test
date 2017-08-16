var express = require('express');
var app = express();

app.use(function(request, response, next) {
    console.log("In comes a " + request.method + " to " + request.url);
    next();
});



app.get('/',function(req,res) {
    res.send('hello World!');
})




var server = app.listen(3000,function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('服务器地址是：%s:%s',host,port);
})