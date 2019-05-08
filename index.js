/*
*
*/
const express = require("express");
const path = require("path");
const router = require("./router.js");
const template = require("art-template");
const bodyParser = require("body-parser");
const app = express();

//
app.use('/www',express.static("public"));

//设置模板文件存放的目录，第一个参数必须是views，第二个参数是目录
app.set('views', path.join(__dirname,'views'));
//注册所使用的模板引擎，第一个参数必须是 view engine，第二个参数和app.engine这个方法中定义的模板引擎的名称（第一个参数）是一致的
app.set('view engine', 'art');
app.engine('art',require('express-art-template'));

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

app.use(router);

app.listen(3000,()=>{
	console.log("running...")
})

