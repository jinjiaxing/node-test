"use strict";
var http = require('http');
var url = require('url');
var router = require('./router.js');
var fs = require('fs');

http.createServer(function(request, response) {
    if(request.url !=='/favicon.ico') {
        response.writeHead(200, {'Content-Type': 'text/html;'});
        console.log(request.url);
        var path =  url.parse(request.url).pathname;
        var path = path.replace(/\//,'');
        console.log('path=',path);
        if (path === '/test') {
            //response.write('test');
            router.test(response);
        } else {
            //response.write('other');
            router.other(response);
        }

        console.log('process title=',process.title);
        readFileAsync('./temp/aa.txt',response);


        var data=  readFile('./temp/aa.txt');
        console.log('同步读取结果：',data);

        writeFile('./temp/bb.txt','<html><head></head><body><h1>This is bb.txt</h1></body></html>>')

        response.end('');
        console.log('End');
    }


}).listen(8000);

function readFile(path) {
    var data = fs.readFileSync(path,'utf-8');
    console.log('同步读取文件完毕');
    return data;
}

function readFileAsync(path) {
    fs.readFile(path,(err,data)=>{
        console.log('异步读取文件：',data.toString());
    })
}

function writeFile(path,data) {
    fs.writeFile(path,data);
    console.log('文件写入成功');
}

console.log('server is running...');

