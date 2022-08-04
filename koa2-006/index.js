const Koa = require("koa");
const staticResource = require("koa-static");
const app = new Koa();

app.use(
    koaBody({
        multipart: true, // 解析文件格式
        formidable: {
            uploadDir: path.join(__dirname, "fengshi"), // 上传目录
            keepExtensions: true, // 保持文件的后缀
            maxFileSize: 2 * 1024 * 1024, // 设置上传文件大小最大限制，默认2M
        },
    })
);

app.use(staticResource("fengshi"));
app.listen(8080);