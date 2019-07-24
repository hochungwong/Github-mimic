const Koa = require('koa');
const Router = require('koa-router');
const next = require('next');
const session = require('koa-session');
const koaBody = require('koa-body');
const atob = require('atob');

const auth = require('./server/auth');
const api = require('./server/api');

const Redis = require('ioredis');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const RedisSessionStore = require('./server/session-store');
//create redis client
const redis = new Redis();

//设置nodejs全局增加一个atob方法
global.atob = atob;

app.prepare().then(() => {
    const server = new Koa();
    const router = new Router();

    //encryt cookie
    server.keys = ['test-dev-github'];

    server.use(koaBody());

    const SESSION_CONFIG = {
        key: 'sid',
        //store: {} - redis stores user session data
        store: new RedisSessionStore(redis),
    }

    server.use(session(SESSION_CONFIG, server));

    //config and process github login via oauth
    auth(server);
    api(server);
    
    router.get('/a/:id', async ctx => {
        const id = ctx.params.id;
        await handle(ctx.req, ctx.res, {
            pathname: '/a',
            query: { id }
        })
        ctx.response = false;
    });

    router.get('/api/user/info', async ctx => {
        const user = ctx.session.userInfo;
        if(!user) {
            ctx.status = 401;
            ctx.body = 'You need to login';
        } else {
            ctx.body = user;
            ctx.set('Content-Type', 'application/json');
        }
        
    })
    server.use(router.routes());

    server.use(async (ctx, next) => {
        await next();
    });

    server.use(async (ctx, next) => {
        ctx.req.session = ctx.session;
        await handle(ctx.req, ctx.res);
        ctx.response = false ;
    })
    
   
    server.listen(3000, ()=> {
        console.log('koa server is listening on 3000');
    });

    //ctx.body
})