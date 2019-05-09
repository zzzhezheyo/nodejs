const express = require("express");
const router = express.Router();
const service = require('./service.js');
//渲染主页,路由处理
router.get('/',service.showIndex);
//添加商品（跳转到添加商品的页面）
router.get('/toAddUser',service.toAddUser);
// 添加商品（提交表单）
router.post('/addUser',service.addUser);
// 跳转到编辑用户信息页面
router.get('/toEditUser',service.toEditUser);
// 编辑用户提交表单
router.post('/editUser',service.editUser);
// 删除用户
router.get('/toDeleteUser',service.toDeleteUser);
// 商品管理
router.get('/toProduct',service.toProduct);
// 上架商品
router.get('/toAddProduct',service.toAddProduct);
// 添加商品（提交表单）
router.post('/addProduct',service.addProduct);
// 跳转到编辑商品信息页面
router.get('/toEditProduct',service.toEditProduct);
// 编辑商品提交表单
router.post('/editProduct',service.editProduct);
// 删除商品
router.get('/toDeleteProduct',service.toDeleteProduct);

module.exports = router;
