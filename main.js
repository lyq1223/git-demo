// 计算机网络 缓存
var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    if (req.url == "/" || req.url == "" || req.url == "/index.html") {
      //读取index.html 把它通过http响应发送给客户端 http
      //应答
      // node异步无阻塞的 高并发的 js 单线程
      fs.readFile("./index.html", function (err, file) {
        //   http请求头
        res.setHeader("Content-Type", "text/html");
        res.writeHead("200", "ok"); //http状态码
        res.end(file);
      });
    } else if (req.url == "/cache.jpeg") {
      fs.readFile("./cache.jpeg", function (err, file) {
        // file
        // 用户带着if-none-match
        console.log(req.headers);
        if (!req.headers["if-none-match"]) {
          // 用户第一次请求，使用文件完整的带宽
          res.setHeader("Content-Type", "images/jpeg");
          res.setHead("200", "ok");
          res.setHead("Etag", "fff");
          res.end(file);
        } else {
          // 再次
          // 1.没有改变
          // 2.变了
          if (req.headers["if-none-match"] == "ffff") {
            //用户没有修改
            // http status code 304 文件没有修改，get请求执行
            // 200 NO，返回文件内容
            // http协议 拟人化工作
            res.writeHead("304");
            res.end(); //省带宽
          } else {
            res.setHeader("Content-Type", "images/png");
            res.setHeader("Etag", "ffff"); //唯一标识符
            res.writeHead("200", "ok");
            res.end(file);
          }
        }
        // 1.第一次请求
        console.log(err, file);
        // res.setHeader("Content-Type", "images/jpeg");
        // res.setHead("200", "ok");
        // res.setHead("Etag", "fff");
        // res.end(file);
      });
    }
  })

  .listen(8888);
