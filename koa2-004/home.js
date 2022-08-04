const router = require("koa-router")();

router.get("/home", (ctx) => {
  ctx.body = "首页数据";
});

module.exports = router;