const Router = require('koa-router');
const router = new Router();
const bcrypt = require('bcryptjs');

// /引入User（Introducing User）
const User = require('../../models/User');

const utils = require('../../utils/index');

/**
 *  @route GET api/users/test
 *  @desc 测试接口地址
 *  @access 接口是公开的
 */
// test
// http://localhost:3001/api/users/test
router.get('/test', async (ctx) => {
  ctx.status = 200;
  ctx.body = { msg: 'users works...' };
});

// 获取用户的信息（Getting information about the user）

router.get('/item/:id', async (ctx) => {
  const id = ctx.params.id;
  const findResult = await User.find({ id });

  ctx.status = 200;
  ctx.body = { msg: 'ok', userInfo: findResult[0] };
});

// 根据query获取用户（Get users based on query）
router.get('/list', async (ctx) => {
  const query = ctx.request.query;

  const findResult = await User.find({ ...query });

  ctx.status = 200;
  ctx.body = { msg: 'ok', list: findResult };
});

// 编辑用户的信息（Edit user's information）
router.post('/edit', async (ctx) => {
  const { id, ...body } = ctx.request.body;
  console.log('sdf', ctx.request.body);

  const findItem = await User.find({ id });
  console.log('findItem', findItem);

  const updateResult = await User.updateOne(
    {
      id,
    },
    {
      $set: {
        ...body,
      },
    },
  );

  ctx.status = 200;
  ctx.body = {
    updateResult,
  };
});

/**
 *  @route POST api/users/register
 *  @desc 注册接口地址
 *  @access 接口是公开的
 */
router.post('/register', async (ctx) => {
  console.log(ctx.request.body);

  // （Storage in database）存储到数据库
  const findResult = await User.find({ name: ctx.request.body.name });

  console.log('findResult', findResult);

  if (findResult.length > 0) {
    ctx.status = 500;
    ctx.body = { msg: 'name already taken' };
  } else {
    // 生成uuid
    const uuid = utils.generateUuid2();
    // not found
    const newUser = new User({
      id: uuid,
      name: ctx.request.body.name,
      email: ctx.request.body.email,
      password: ctx.request.body.password,
    });

    console.log('newUser1', newUser);

    // （Password encoding processing）密码编码处理
    newUser.password = bcrypt.hashSync(newUser.password, 10);

    console.log('newUser2', newUser);

    // （Storage in database）存储到数据库
    await newUser
      .save()
      .then((user) => {
        ctx.body = user;
      })
      .catch((err) => {
        console.log(err);
      });
    // （Return json data）返回json数据
    ctx.body = newUser;
  }
});

router.post('/login', async (ctx) => {
  const body = ctx.request.body;

  // （Storage in database）存储到数据库
  const findResult = await User.find({ name: body.name });

  if (findResult.length === 0) {
    ctx.status = 500;
    ctx.body = { msg: 'current user does not exist' };
    return;
  }

  const isPasswordTrue = bcrypt.compareSync(body.password, findResult[0].password);

  if (!isPasswordTrue) {
    ctx.status = 500;
    ctx.body = { msg: 'wrong password' };
    return;
  }

  ctx.status = 200;
  ctx.body = {
    msg: '登录成功',
    id: findResult[0].id,
    name: findResult[0].name,
    userInfo: findResult[0],
  };

  console.log('ctx.body res', ctx.body);
});

module.exports = router.routes();
