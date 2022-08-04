const Koa = require("koa");
const app = new Koa();
const router = require("koa-router")();


router.get("/", (ctx) => {
  // 当在浏览器里访问 url/?name=gongmw 地址，通过 ctx.query 就可以获得路径的参数值对象。
  console.log(ctx.query); //{ name: 'gongmw' }
  console.log(ctx.querystring); //name=gongmw
  ctx.body = "hello world";
});

// POST参数获取
router.post("/submit", (ctx) => {
  console.log(ctx.request.body);
  ctx.body = "submit success";
});

router.get("/404", (ctx) => {
  ctx.body = "页面数据不存在";
});

// 动态路由参数
// 当路径是一个动态变化值的时候，可以通过 ctx.params 来获取动态对应的参数。
router.get("/404/:id", async (ctx) => {
  console.log(ctx.params); //{ id: '1111' }
  ctx.body = "数据404";
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