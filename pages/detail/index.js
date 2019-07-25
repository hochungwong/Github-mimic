import withRepoBasic from '../../components/with-repo-basic';
import dynamic from 'next/dynamic';
import api from '../../lib/api';

const MDRenderer = dynamic(
    () => import('../../components/MarkdownRenderer'),
);

function Detail({ readme }) {    
    return (
        <MDRenderer 
            content={readme.content}
            isBase64={true}
        />
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