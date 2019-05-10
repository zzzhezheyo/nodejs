
const data = require('./data.json');
const path = require('path');
const fs = require('fs');
const db = require('./db.js');

// 自动生成用户的编号
let maxUserCode = ()=>{
	let arr =[];
	data.forEach((item)=>{
		arr.push(item.id);
	});
	return Math.max.apply(null,arr);
}
// //渲染首页
// exports.showIndex = (req,res) =>{
// 	let sql = "select * from userinfo"
// 	db.base(sql,null,(result)=>{
// 		res.render("index",{list:result});
// 	});
// }
//跳转到用户管理界面
exports.showIndex = (req,res) => {
	let sql = "select * from userinfo"
	db.base(sql,null,(result)=>{
		res.render("index",{list:result});
	});
}
//调转到添加用户的页面
exports.toAddUser = (req,res) => {
	res.render("addUser",{});
}
// 添加用户保存数据
exports.addUser = (req,res) => {
	let info = req.body;
	let user ={};
	for(let key in info){
		user[key] = info[key];
	}
	let sql = 'insert into userinfo set ?';
	db.base(sql,user,(result)=>{
		if(result.affectedRows == 1){
			res.redirect('/');
		}
	});
}

// 跳转编辑页面
exports.toEditUser=(req,res) =>{
	let id = req.query.id;
	let sql = "select * from userinfo where id=?";
	let data = [id];
	db.base(sql,data,(result)=>{
		res.render('editUser',result[0]);
	})
}
//编辑用户更新数据
exports.editUser=(req,res) =>{
	let info = req.body;
	let sql = 'update userinfo set username=?,tel=?,password=? where id=?';
	let data =[info.username,info.tel,info.password,info.id];
	db.base(sql,data,(result)=>{
		if(result.affectedRows == 1){
			res.redirect('/');
		}
	})
}
// 删除用户信息
exports.toDeleteUser = (req,res)=>{
	let id = req.query.id;
	let sql = 'delete from userinfo where id=?';
	let data = [id];
	db.base(sql,data,(result)=>{
		if(result.affectedRows == 1){
			res.redirect('/');
		}
	})
}

// 跳转商品页面
exports.toProduct = (req,res) => {
	let sql = "select * from product"
	db.base(sql,null,(result)=>{
		res.render("product",{list:result});
	});
}
// 商品添加界面
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
	let sql = 'insert into product set ?';
	db.base(sql,product,(result)=>{
		if(result.affectedRows == 1){
			res.redirect('/toProduct');
		}
	});
}
// 跳转编辑页面
exports.toEditProduct=(req,res) =>{
	let id = req.query.id;
	let sql = "select * from product where id=?";
	let data = [id];
	db.base(sql,data,(result)=>{
		res.render('editProduct',result[0]);
	})
}
//编辑商品更新数据
exports.editProduct=(req,res) =>{
	let info = req.body;
	let sql = 'update product set name=?,type=?,price=? where id=?';
	let data =[info.name,info.type,info.price,info.id];
	db.base(sql,data,(result)=>{
		if(result.affectedRows == 1){
			res.redirect('/toProduct');
		}
	})
}
// 删除商品信息
exports.toDeleteProduct = (req,res)=>{
	let id = req.query.id;
	let sql = 'delete from product where id=?';
	let data = [id];
	db.base(sql,data,(result)=>{
		if(result.affectedRows == 1){
			res.redirect('/toProduct');
		}
	})
}
// 跳转订单页面
exports.toOrder = (req,res) => {
	let sql = "select * from orderPro"
	db.base(sql,null,(result)=>{
		res.render("order",{list:result});
	});
}
// 跳转编辑页面
exports.toEditOrder=(req,res) =>{
	let id = req.query.id;
	let sql = "select * from orderPro where id=?";
	let data = [id];
	db.base(sql,data,(result)=>{
		res.render('editOrder',result[0]);
	})
}
//编辑商品更新数据
exports.editOrder=(req,res) =>{
	let info = req.body;
	let sql = 'update orderPro set name=?,mount=?,username=?,usertel=? where id=?';
	let data =[info.name,info.mount,info.username,info.usertel,info.id];
	db.base(sql,data,(result)=>{
		if(result.affectedRows == 1){
			res.redirect('/toOrder');
		}
	})
}
// 删除订单信息
exports.toDeleteOrder = (req,res)=>{
	let id = req.query.id;
	let sql = 'delete from orderPro where id=?';
	let data = [id];
	db.base(sql,data,(result)=>{
		if(result.affectedRows == 1){
			res.redirect('/toOrder');
		}
	})
}