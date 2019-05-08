
const data = require('./data.json');
const path = require('path');
const fs = require('fs');
const db = require('./db.js');

// 自动生成商品的编号
let maxProductCode = ()=>{
	let arr =[];
	data.forEach((item)=>{
		arr.push(item.id);
	});
	return Math.max.apply(null,arr);
}

//渲染主页面
exports.showIndex = (req,res) =>{
	let sql = "select * from userinfo"
	db.base(sql,null,(result)=>{
		res.render("index",{list:result});
	});
}
//调转到添加图书的页面
exports.toAddProduct = (req,res) => {
	res.render("addProduct",{});
}
// 添加商品保存数据
exports.addProduct = (req,res) => {
	let info = req.body;
	let product ={};
	for(let key in info){
		product[key] = info[key];
	}
	let sql = 'insert into userinfo set ?';
	db.base(sql,product,(result)=>{
		if(result.affectedRows == 1){
			res.redirect('/');
		}
	});
}

// 跳转编辑页面
exports.toEditPro=(req,res) =>{
	let id = req.query.id;
	let sql = "select * from userinfo where id=?";
	let data = [id];
	db.base(sql,data,(result)=>{
		res.render('editPro',result[0]);
	})
}
//编辑商品更新数据
exports.editPro=(req,res) =>{
	let info = req.body;
	let sql = 'update userinfo set username=?,tel=?,password=? where id=?';
	let data =[info.username,info.tel,info.password,info.id];
	db.base(sql,data,(result)=>{
		if(result.affectedRows == 1){
			res.redirect('/');
		}
	})
}
// exports.toDeletePro = (req,res) => {
// 	res.render("deletePro",{});
// }
// 删除用户信息
exports.deletePro = (req,res)=>{
	let id = req.query.id;
	let sql = 'delete from userinfo where id=?';
	let data = [id];
	db.base(sql,data,(result)=>{
		if(result.affectedRows == 1){
			res.redirect('/');
		}
	})
}





