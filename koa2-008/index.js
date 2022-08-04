const Koa = require("koa");
const path = require("path");
const staticResource = require("koa-static");
const router = require("koa-router")();
const koaBody = require("koa-body");
const send = require("koa-send");
const fs = require("fs");
const archiver = require("archiver");
const app = new Koa();

app.use(
  koaBody({
    multipart: true, //解析文件格式
    formidable: {
      uploadDir: path.join(__dirname, "fengshi"), // 上传目录
      keepExtensions: true, // 保持文件的后缀
      maxFileSize: 2 * 1024 * 1024, // 设置上传文件大小最大限制，默认2M
    },
  })
);

router.post("/upload", async (ctx, next) => {
  console.log(ctx.request.files.file);
});

router.post("/download", async (ctx) => {
  // 需要被打包的文件
  const list = ["fengshi/index.html", "fengshi/qij.png"];
  const zipName = "fengshi.zip";
  const zip = archiver("zip");
  zip.pipe(fs.createWriteStream(zipName));
  for (let i = 0; i < list.length; i++) {
    // 添加单个文件到压缩包，因为这里没有选择直接打包文件夹下所有文件
    zip.append(fs.createReadStream(list[i]), { name: list[i] });
  }
  // 打包
  await zip.finalize();
  ctx.attachment(zipName);
  // 下载文件
  await send(ctx, zipName);
});

app.use(staticResource("fengshi"));
app.use(router.routes()).use(router.allowedMethods());

app.listen(8080);