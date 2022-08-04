const Koa = require("koa");
const app = new Koa();

app.use(async (ctx) => {
  let data = "";
  // 获取用户访问的路由信息
  let url = ctx.request.url;
  switch (url) {
    case "/":
      data = "hello world";
      break;
    case "/404":
      data = "页面数据不存在";
      break;
    default:
      break;
  }
  // 回传给前端的数据
  ctx.body = data;
});

app.listen(8080);