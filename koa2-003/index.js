const Koa = require("koa");
const app = new Koa();
const router = require("koa-router")();

router.get("/", (ctx) => {
  ctx.body = "hello world";
});

router.get("/404", (ctx) => {
  ctx.body = "页面数据不存在";
});

// 加载路由中间件
app.use(router.routes());

/*
这个函数从字面解释可以看出 allowed Methods，
这个是 Koa 官方建议的一种写法。 
假如前端访问 404 路由时，使用了 POST 请求，会直接返回 404 状态码，
但是当使用了 allowedMethods 就是会返回 Method Not Allowed 错误状态码是 405，
会更便于解决和调试问题。
*/
app.use(router.allowedMethods());
app.listen(8080);