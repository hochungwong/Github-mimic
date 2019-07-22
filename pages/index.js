import { useEffect } from 'react';
import { Button, Icon, Tabs } from 'antd';
import getConfig from 'next/config';
import { connect } from 'react-redux';
import Router, { withRouter } from 'next/router';
import Repo from '../components/Repos';

const { publicRuntimeConfig } = getConfig();

const api = require('../lib/api');

const url = '/search/repositories?q=react';

const isServer = typeof window === 'undefined';

let cachedUserRepos, cachedStarredRepos ;

function Index ({ userRepos, starredRepos, user, router }) {
    const tabKey = router.query.key || '1';

    const handleTableChange = activeKey => {
        Router.push(`/?key=${activeKey}`);
    }

    useEffect(() => {
        if (!isServer) {
            cachedUserRepos = userRepos;
            cachedStarredRepos = starredRepos;
        }
    })

    if (!user || !user.id) {
        return (
            <div className="root">
                <p>Please Log In with Your Github Account</p>
                <Button 
                    type='primary' 
                    href={ publicRuntimeConfig.OAUTH_URL }
                >   
                    Click to Log In
                </Button>
                <style jsx>{`
                    .root {
                        height: 400px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center; 
                    }
                `}</style>
            </div>
        )
    }
    return (
        <div className="root">
            <div className="user-info">
                <img 
                    src={user.avatar_url} 
                    alt="use avatar" 
                    className="avatar"
                />
                <span className="login">{user.login}</span>
                <span className="name">{user.name}</span>
                <span className="bio">{user.bio}</span>
                <p className="email">
                    <Icon 
                        type='mail'
                        style={{ marginRight: 5 }}
                    />
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                </p>
            </div>
            <div className="user-repos">
                <Tabs 
                    activeKey={tabKey} 
                    animated={false}
                    onChange={handleTableChange}
                >
                    <Tabs.TabPane tab="Your Repositories" key="1">
                        {userRepos.map((repo,key) => 
                            <Repo key={key} repo={repo}/>
                        )}
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Starred Repositories" key="2">
                        {starredRepos.map((repo,key) => 
                            <Repo key={key} repo={repo}/>
                        )}
                    </Tabs.TabPane>
                </Tabs>          
            </div>
            <style jsx>{`
                .root {
                    display: flex;
                    align-items: flex-start;
                    
                }
                .user-info {
                    width: 200px;
                    margin-right: 40px;
                    flex-shrink: 0;
                    display: flex;
                    flex-direction: column
                }
                .login {
                    font-weight: 800;
                    font-size: 20px;
                    margin-top: 20px;
                }.
                .name {
                    font-size: 16px;
                    color: #777;
                }
                .bio {
                    margin-top: 20px;
                    color: #333;
                }
                .avatar {
                    width: 100%;
                    border-radius: 5px;
                }
                .user-repos {
                    flex-grow: 1;
                }
            `}</style>
        </div>
    )
} 

/*getInitialProps 会在客户端不同页面之间每次跳转时调用
同时在服务端渲染的时候，若访问index页面，getInitialProps也会被调用
属于node环境，不存在客户端domain这些window下才有的环境
*/


Index.getInitialProps = async ({ ctx, reduxStore }) => {
    const user = reduxStore.getState().user;
    if (!user || !user.id) {
        return {};
    }

    if (!isServer) {
        if (cachedUserRepos && cachedStarredRepos) {
            return {
                userRepos: cachedUserRepos,
                starredRepos: cachedStarredRepos
            }
        } 
    }
    

    const userRepos = await api.request({ url: '/user/repos' }, ctx.req, ctx.res);
    const userStarredRepos = await api.request(
        { url: `/user/starred` },
        ctx.req,
        ctx.res
    );
    
    
    
    return {
        userRepos: userRepos.data,
        starredRepos: userStarredRepos.data
    }
}

const mapStateToProps = state => {
    return {
        user: state.user, 
    }
}

//withRouter() wrap all connect()
export default withRouter(connect(mapStateToProps)(Index))  ;