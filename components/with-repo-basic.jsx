import { useEffect } from 'react';
import Repo from './Repos';
import Link from 'next/link';
import { withRouter } from 'next/router';

import { getRepo, cacheRepo } from '../lib/repo-basic-cache';

const api = require('../lib/api');

const isServer = typeof window === 'undefined';

//help function to concat query string
function makeQuery(queryObject) {
    const query = Object.entries(queryObject).reduce(
        (result, entry) => {
            result.push(entry.join('='));
            return result;
        }, []).join('&');
    return `?${query}`;
}

export default function (Comp, type = 'readme') {
    function WithDetail({ repoBasic, router, ...rest }) {
        console.log(repoBasic);
        const query = makeQuery(router.query);

        useEffect(() => {
            !isServer && cacheRepo(repoBasic);
        })

        return (
            <div c lassName="root">
                <div className="repo-basic">
                    <Repo repo={repoBasic}/>
                    <div className="tabs">
                        {
                            type === 'readme' ? 
                                <span className='tab'>Readme</span> : 
                                <Link href={`/detail${query}`}>
                                    <a className="tab readme">Readme </a>
                                </Link>
                        }
                        {
                            type === 'issues' ? 
                                <span className='tab'>Issues</span>:
                                <Link href={`/detail/issues${query}`}>
                                    <a href="" className="tab issues">Issues</a>
                                </Link>
                        }
                        
                    </div>
                </div>
                <div>
                    <Comp { ... rest }/>
                </div>
                <style jsx>{`
                    .root {
                        padding-top: 20px;
                    }
                    .repo-basic {
                        padding: 20px;
                        border: 1px solid #eee;
                        margin-bottom: 20px;
                        border-radius: 5px;
                    }
                    .tab + .tab {
                        margin-left: 20px;
                    }
                `}</style>
            </div>
        )
    }
    
    WithDetail.getInitialProps = async (context) => {
        console.log('context', context);
        const { router, ctx } = context;
        const { owner, name } = ctx.query;

        const full_name = `${owner}/${name}`;
        const repo = getRepo(full_name);
        
        let pageData = {} ;
        if (Comp.getInitialProps) {
            pageData = await Comp.getInitialProps(context);
        }
        
        //get cache
        if (repo) {
            return {
                repoBasic: repo,
                ... pageData,
            }
        }

        const repoBasic = await api.request({
                url: `/repos/${owner}/${name}`, 
            },
            ctx.req,
            ctx.res
        );

        return {
            repoBasic: repoBasic.data,
            ... pageData
        }
    };

    return withRouter(WithDetail) ;
}