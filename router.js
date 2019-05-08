const express = require("express");
const router = express.Router();
const service = require('./service.js');
//渲染主页,路由处理
router.get('/',service.showIndex);
//添加商品（跳转到添加商品的页面）
router.get('/toAddProduct',service.toAddProduct);
// 添加商品（提交表单）
router.post('/addProduct',service.addProduct);
// 跳转到编辑商品信息页面
router.get('/toEditPro',service.toEditPro);
// 编辑商品提交表单
router.post('/editPro',service.editPro);
// // 跳转到编辑商品信息页面
// router.get('/toDeletePro',service.toDeletePro);
// 添加商品（提交表单）
router.post('/deletePro',service.deletePro);

module.exports = router;
