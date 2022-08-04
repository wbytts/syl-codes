const Koa = require("koa");
const app = new Koa();


const HomeRouter = require("./router/home");
const AccountRouter = require("./router/account");

// 是比较简约的一种分离方式，也可以把所有路由都集中到一个文件 exports 出去，在 index.js 里面引入。
app.use(HomeRouter.routes());
app.use(AccountRouter.routes());

app.listen(8080);