"use strict";

var fs  =require('fs');

fs.readdir('./',(err,files)=>{
    if(err) {
        console.error('读取文件错误：',err);
    }
})