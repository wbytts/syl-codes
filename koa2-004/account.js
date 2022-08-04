const router = require("koa-router")();

router.get("/account", (ctx) => {
  ctx.body = "个人中心数据";
});

module.exports = router;