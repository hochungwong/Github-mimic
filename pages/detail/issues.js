import withRepoBasic from '../../components/with-repo-basic';
import { Avatar } from 'antd';
import api from '../../lib/api';

function IssueItem({ issue }) {
    return (
        <div className="issue">
            <div className="avatar">
                <Avatar 
                    src={issue.user.avatar_url}
                    shape='square'
                    size={50}
                />
            </div>
            <div className="main-info">
                <h6>
                    <span>{issue.title}</span>
                </h6>
                <p className="sub-info">
                    <span>Updated at {issue.updated_at}</span>
                </p>
            </div>
            <style jsx>{`
                .issue {
                    display: flex;
                    position: relative;
                    padding: 10px
                }
                .issue:hover {
                    background: #fafafa;
                }
                .issue + .issue {
                    border-top: 1px solid #eee;
                }
                .main-info > h6 {
                    max-width: 600px;
                    font-size: 16px;
                }
                .avatar {
                    margin-right: 20px;
                }
                .sub-info {
                    margin-bottom: 0;
                }
                .sub-info > span + span {
                    display: inline-block;
                    margin-left: 20px;
                    font-size: 12px;
                }
            `}</style>
        </div>
    )
}

function Issues({ issues }) {
    console.log(issues);
    return (
        <div className="root">
            <div className="issues">
                {issues.map(issue => <IssueItem issue={issue} key={issue.id}/>)}
            </div>
            <style jsx>{`
                .issues {
                    border: 1px solid #eee;
                    border-radius: 5px;
                    margin-bottom: 20px;
                    margin-top: 20px;
                }    
            `}</style>
        </div>
    )
}

Issues.getInitialProps = async ({ ctx }) => {
    
    const { owner, name } = ctx.query;

    const issueResp = await api.request({
        url: `/repos/${owner}/${name}/issues`
    }, ctx.req, ctx.res);

    return {
        issues: issueResp.data
    }
}

export default withRepoBasic(Issues, 'issues') ;