'use strict';

const { v4: uuidv4 } = require('uuid');
/**
 * 生成唯一id
 */

// ~ 这里由于环信的限制，现在去掉了中间的-，这样应该是不影响唯一性的问题的，分割线的位置是固定的：b1c4a89e-4905-5e3c-b57f-dc92627d011e => 8-4-4-4-12
//Here, due to the limitations of the ring letter, the middle - is now removed, which should not affect the uniqueness issue, and the position of the dividing line is fixed: b1c4a89e-4905-5e3c-b57f-dc92627d011e => 8-4-4-4-12
module.exports.generateUuid = () => {
  return uuidv4().replace(/-/g, '');
};

module.exports.generateUuid2 = () => {
  return uuidv4();
};
