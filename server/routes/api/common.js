const Router = require('koa-router');
const router = new Router();
const bcrypt = require('bcryptjs');

const College = require('../../models/College');
const Department = require('../../models/Department');
const utils = require('../../utils/index');

/**
 *  @route GET api/users/test
 *  @desc 测试接口地址（TEST INTERFACE ADDRESS）
 *  @access 接口是公开的（The interface is public）
 */
router.get('/college/enum', async (ctx) => {
  ctx.status = 200;
  const findResult = await Department.find();

  ctx.status = 200;
  ctx.body = { msg: 'ok', list: findResult };
});

router.get('/department/item/:id', async (ctx) => {
  const id = ctx.params.id;
  const findResult = await Department.find({ id });

  ctx.status = 200;
  ctx.body = { msg: 'ok', data: findResult[0] };
});

module.exports = router.routes();
