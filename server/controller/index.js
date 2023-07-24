const Koa = require('koa');
const app = new Koa();
const College = require('../models/College');
const Department = require('../models/Department');
const college = require('../data/college');

module.exports = async function () {
  for (let i = 0; i < college.length; i++) {
    const item = college[i];
    const department = item.department;
    const id1 = i + 1;

    await College.findOneAndUpdate(
      {
        id: id1,
        name: item.name,
      },
      {
        $set: {
          id: id1,
        },
      },
      { upsert: true, new: true },
    )
      .then((res) => {
        // console.log('colleges', res);
      })
      .catch((err) => {
        console.log(err);
      });

    if (department) {
      for (let j = 0; j < department.length; j++) {
        const dep = department[j];
        const id2 = j + 1;

        await Department.findOneAndUpdate(
          {
            id: `${id1}_${id2}`,
            name: dep.name,
            college: id1,
          },
          {
            $set: {
              id: `${id1}_${id2}`,
            },
          },
          { upsert: true, new: true },
        )
          .then((res) => {
            // console.log('dep', res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }
};
