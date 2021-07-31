const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = '这是第一个nodejs程序部署到阿里云！！！';
});

app.listen(3000,'0.0.0.0',function () {
    console.log('服务器启动成功!监听端口：3000');
});