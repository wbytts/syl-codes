const Koa = require("koa");

// 实例化了一个 Koa2 对象，app 本身继承了 Koa2 的属性和方法。
const app = new Koa();

// 表示 Koa 的中间件方法，每个中间件默认可以接受两个参数，
// 第一个参数是 Context 对象，第二个参数是 next 函数。
app.use(async (ctx, next) => {
  // 当调用 next 函数时候，就会把执行权转交给下一个中间件，
  // 最后还会在返回来再执行，所以我们一般说 Koa 的中间件执行顺序是洋葱模型
  await next();
  ctx.response.type = "text/html";
  ctx.response.body = "<h1>Hello, Koa!</h1>";
});

app.listen(8080);
console.log("Server running  start");