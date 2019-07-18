const axios = require('axios');

const github_base_url = 'https://api.github.com';

module.exports = server => {
    server.use(async (ctx, next) => {
        const path = ctx.path;
        console.log('path', path)
        if (path.startsWith('/github/')) {
            const githubAuth = ctx.session.githubAuth;
            const githubPath = `${github_base_url}${ctx.url.replace('/github/', '/')}`;
            console.log('githubPath', githubPath);
            const token = githubAuth && githubAuth.access_token;
            let headers = {};
            if (token) {
                headers['Authorization'] = `${githubAuth.token_type} ${token}`;
            }
            try {
                const result = await axios({
                    method: 'GET',
                    url: githubPath,
                    headers
                });
                if( result.status === 200) {
                    ctx.body = result.data;
                    ctx.set('Content-type', 'application/json');
                } else {
                    ctx.status = result.status;
                    ctx.body = {
                        success: false
                    };
                    ctx.set('Content-type', 'application/json');
                }
            } catch (e) {
                console.log(e);
                ctx.body = {
                    success: false
                };
                ctx.set('Content-type', 'application/json');
            }
        } else {
            await next();
        }
    })
}