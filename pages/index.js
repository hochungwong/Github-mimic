import { useEffect } from 'react';
import axios from 'axios';
const api = require('../lib/api');

const url = '/search/repositories?q=react';

function Index () {

    useEffect(() => {
        axios.post('/github/test', { test: 123 } );
    })

    return <span>Index</span>
} 

/*getInitialProps 会在客户端不同页面之间每次跳转时调用
同时在服务端渲染的时候，若访问index页面，getInitialProps也会被调用
属于node环境，不存在客户端domain这些window下才有的环境
*/
Index.getInitialProps = async ({ ctx }) => {
    const result = await api.request({ url }, ctx.req, ctx.res);
    return {
        data: result.data
    }
}

export default Index ;