const Router = require('koa-router');
const router = new Router();
const bcrypt = require('bcryptjs');

const Paper = require('../../models/Paper');
const utils = require('../../utils/index');

/**
 *  @route GET api/users/test
 *  @desc 测试接口地址
 *  @access 接口是公开的
 */
// test
// http://localhost:3001/api/users/test
router.get('/item/:id', async (ctx) => {
  ctx.status = 200;
  ctx.body = { msg: 'users works...' };
});

router.get('/test', async (ctx) => {
  ctx.status = 200;
  ctx.body = { msg: 'users works...' };
});

/**
 *  @route POST api/users/register
 *  @desc 注册接口地址
 *  @access 接口是公开的
 */

router.post('/add-edit', async (ctx) => {
  console.log(ctx.request.body);

  const findResult = await User.find({ name: ctx.request.body.name });

  // console.log('findResult', findResult);

  // if (findResult.length > 0) {
  //   ctx.status = 500;
  //   ctx.body = { email: '名字已被占用' };
  // } else {
  //   // 生成uuid
  //   const uuid = utils.generateUuid2();
  //   // not found
  //   const newUser = new User({
  //     id: uuid,
  //     name: ctx.request.body.name,
  //     email: ctx.request.body.email,
  //     password: ctx.request.body.password,
  //   });

  //   console.log('newUser1', newUser);

  //   // 密码编码处理
  //   newUser.password = bcrypt.hashSync(newUser.password, 10);

  //   console.log('newUser2', newUser);

  //   // 存储到数据库
  //   await newUser
  //     .save()
  //     .then((user) => {
  //       ctx.body = user;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   // 返回json数据
  //   ctx.body = newUser;
  // }
});

module.exports = router.routes();
