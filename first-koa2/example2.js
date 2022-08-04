const Koa = require("koa");
const app = new Koa();

// 实现一个日志记录中间件文件函数。
const logger = async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`请求方法：${ctx.method}-执行时间- ${ms}`);
};

// 注意：app.use(logger) 要放在前面调用才可以统计，
// 如果放在最后调用就会出现在 ctx.body 后没有在调用 next 函数，这样就找不到控制权了。
app.use(logger)

app.use(async (ctx, next) => {
    // 注册中间件
    console.log(1);
    await next(); // 跳转下一个中间件
    console.log(2);
});

// ctx 参数是 Context 对象。
// 第二个参数是 next 函数，最外层的中间件函数首先会执行
// 当调用 next 函数时，就可以把执行权转交给下一个中间件，
// 直到执行最后一个之后会回归到上一层回去执行，就像洋葱模型一样。
app.use(async (ctx, next) => {
    console.log(3);
    await next();
    console.log(4);
});

app.use(async (ctx, next) => {
    console.log(5);
    await next();
    console.log(6);
});

app.use(async (ctx, next) => {
    console.log("url", ctx.request.url);
    ctx.body = "Koa Middleware";
});

app.listen(8080);