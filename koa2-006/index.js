const Koa = require("koa");
const staticResource = require("koa-static");
const app = new Koa();

// 这里是在项目根目录新建 fengshi 名文件夹，里面存放静态文件的
app.use(staticResource("fengshi"));
app.listen(8080);