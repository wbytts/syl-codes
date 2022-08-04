// 因为是 Web 应用，我们首先引入 require 模块来加载一个 http 模块
// http 模块是 Node.js 系统自带的模块。
const http = require("http");

// 接下来启动一个 http 服务，
// 通过 http 模块的 createServer 方法可以直接实现
// 并通过 listen 方法可以监听一个端口
http.createServer(function (request, response) {
    // 解析：response.writeHead() 表示显示发送头数据
    // HTTP 状态值为 200，内容类型为 text/plain。
    response.writeHead(200, { "Content-Type": "text/plain" });
    // response.end() 表示发送返回体，发送响应数据 "Hello World"。
    response.end("hello world");
  })
  .listen(8080);

console.log("Server running  http://localhost:8080/");

// 执行：node index.js