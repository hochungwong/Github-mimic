//处理getInitialProps时需要进行的数据请求
const axios = require('axios');

const github_base_url = 'https://api.github.com';

async function requestGithub(method, url, data, headers) {
    return await axios({
        method,
        url: `${github_base_url}${url}`,
        data,
        headers
    })
}

const isServer = typeof windwo === 'undefined';

async function request({ method = 'GET', url, data = {} }, req, res ) {
    if(!url) {
        throw Error('url must be provided');
    }
    if (isServer) {
        const session = req.session;
        const headers = {};
        const githubAuth = session.githubAuth || {};
        if (githubAuth.access_token) {
            headers['Authorization'] = `${githubAuth.token_type} ${githubAuth.access_token}`;
        }
        return await requestGithub(method, url, data, headers)
    } else {
        return await axios({
            method,
            // /github/search/repositories...
            url: `/github${url}`,
            data,
        })
    }
}

module.exports = {
    request,
    requestGithub
}