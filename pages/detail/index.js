import MarkdownIt from 'markdown-it';
import 'github-markdown-css';

import withRepoBasic from '../../components/with-repo-basic';
import api from '../../lib/api';

const md = new MarkdownIt();

//decode Chinese
function b64_to_utf8(str) {
    return decodeURIComponent(escape(atob(str)));
}

function Detail({ readme }) {
    const content = atob(readme.content);
    const html = md.render(content);
    return (
        <div className="markdown-body">
            <div dangerouslySetInnerHTML={{ __html: html }} />  
        </div>
    )
}

Detail.getInitialProps = async ({ ctx: {
    query: {
        owner, 
        name 
    },
    req,
    res
}}) => {
    console.log('detial get init');
    const readmeResp = await api.request(
        {
            url: `/repos/${owner}/${name}/readme`
        },
        req,
        res
    )
     
    return {
        readme: readmeResp.data
    }
}

export default withRepoBasic(Detail, 'readme') ;