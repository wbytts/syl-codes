const Koa = require("koa");
const path = require("path");
const staticResource = require("koa-static");
const router = require("koa-router")();
const koaBody = require("koa-body");
const app = new Koa();

/*
这里需要注意的是，
在上面我们使用了 koa-static 进行静态文件托管 fengshi 文件夹，
由于 upload.html 文件也是静态文件，
我们只需要把 upload.html 文件放到 fengshi 下，所以启动服务就可以自动加载了，
另外指定了 uploadDir 上传目录，系统会自动把文件上传到此目录。
*/

app.use(
    koaBody({
        multipart: true,
        formidable: {
            uploadDir: path.join(__dirname, "fengshi"), // 上传目录
            keepExtensions: true, // 保持文件的后缀
            maxFileSize: 2 * 1024 * 1024, // 设置上传文件大小最大限制，默认2M
        },
    })
);

router.post("/upload", async (ctx, next) => {
    console.log(ctx.request.files.file);
    const file = ctx.request.files.file
    fs.createReadStream.pipe(fs.createWriteStream(file.filepath));
});

app.use(staticResource("fengshi"));
app.use(router.routes()).use(router.allowedMethods());

app.listen(8080);