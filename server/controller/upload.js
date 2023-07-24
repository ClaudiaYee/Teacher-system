const fs = require('fs');
const path = require('path');

class UpLoad {
  static async upLoadImg(ctx) {
    const file = ctx.request.files.file; //ctx.request.files.file中的file需要与前端使用的名称保持一致{The file in ctx.request.files.file needs to be consistent with the name used by the front end}

    const basename = path.basename(file.filepath); //（The basename returned by passing in an absolute path is the name of the file + extension）传入绝对路径返回的basename为文件名称+拓展名

    ctx.status = 200;

    ctx.body = {
      url: `${ctx.origin}/upload/${basename}`, //ctx.origin为http://localhost:3000
      relativeUrl: `/upload/${basename}`,
      name: file.originalFilename,
    };

    // const file = ctx.request.files.file; //（The img parameter of the file passed by the front-end）前端传过来的文件img参数

    // console.log("upLoadImg", file);

    // const readStream = fs.createReadStream(file.path); //（READ the files）读取文件
    // const cdn = path.resolve(__dirname, '../views/upload'); //（Setting the path to the storage file）设置存放文件路径

    // const name = `/${Date.now()}-${file.name}`;

    // console.log("cdn + name", cdn + name);

    // const writeStream = fs.createWriteStream(cdn + name); //（write the files）写文件

    // await readStream.pipe(writeStream);
    // // （Return the access path of the successfully written CDN image to the front-end）把写入成功的CDN图片的访问路径返回前端
    // ctx.body = {
    //   err: 0,
    //   msg: 'success',
    //   data: {
    //     fileInfo: '/cdn' + name,
    //   },
    // };
  }
}

module.exports = UpLoad;
