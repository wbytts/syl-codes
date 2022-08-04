const Koa = require("koa");
const router = require("koa-router")();

// https://www.npmjs.com/package/koa-session
const Session = require("koa-session");

const app = new Koa();
app.keys = ["koacs"];

// 在 CONFIG 对象里，使用 Session 之前进行的一些配置项开关。
const CONFIG = {
    key: "koa:sc" /**  cookie 的 key。 (默认是 koa:sess) */,
    maxAge: 5000 /**  Session 过期时间，以毫秒 ms 为单位计算 。*/,
    autoCommit: true /** 自动提交到响应头。(默认是 true) */,
    overwrite: true /** 是否允许重写 。(默认是 true) */,
    httpOnly: true /** 是否设置 HttpOnly (默认 true) */,
    signed: true /** 是否签名。(默认是 true) */,
    rolling: true /** 是否每次响应时刷新 Session 的有效期。(默认是 false) */,
    renew: false /** 是否在 Session 快过期时刷新 Session 的有效期。(默认是 false) */,
};

app.use(Session(CONFIG, app));

// ctx.cookies.get(name, [options]) 读取
// ctx.cookies.set(name, value, [options]) 写入

router.get("/", async (ctx) => {
    ctx.cookies.set("koa2", "cookiesession", {
        expires: new Date("2025-06-01"), // cookie 失效时间
        overwrite: false, // 是否允许重写
    });
    ctx.body = "koacookiesession";
});

router.get("/session", async (ctx) => {
    let idNum = ctx.session.id || 0;
    ctx.session.id = ++idNum;
    ctx.body = idNum;
  });
  

app.use(router.routes()).use(router.allowedMethods());

app.listen(8080);