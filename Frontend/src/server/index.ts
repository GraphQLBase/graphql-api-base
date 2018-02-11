import Koa from 'koa';
import serve from 'koa-static';

const app = new Koa();

app.use(async (ctx, next) => {
  console.log('handling request for ', ctx.originalUrl);
  await next();
});

app.use(serve('public'));
app.use(serve('dist/client'));

app.listen(3002);

console.log('Frontend is listening on port 3002.');
