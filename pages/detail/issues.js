import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';

import withRepoBasic from '../../components/with-repo-basic';
import { Avatar, Button, Select, Spin } from 'antd';
import api from '../../lib/api';

import { getLastUpdated } from '../../lib/utils';

import SearchUser from '../../components/SearchUser';

const MdRenderer = dynamic(() => import('../../components/MarkdownRenderer'));

function IssueDetail({ issue }) {
    return (
        <div className="root" >
            <MdRenderer 
                content={issue.body}
            />
            <div className="actions">
                <Button 
                    href={issue.html_url}
                    target="_blank"
                >
                    Open Issue Discussion
                </Button>
            </div>
            <style jsx>{`
                .root {
                    background: #fafafa;
                    padding: 20px;
                }
                .actions {
                    text-align: right
                }
            `}</style>
        </div>
    )
}

function IssueItem({ issue }) {
    
    const [showDetail, setShowDetail] = useState(false);

    //avoid closure
    const toggleShowDetail = useCallback(() => {
        setShowDetail(detail => !detail);
    }, [])

    return (
        <div>
            <div className="issue">
                <Button
                    type='primary'
                    size='small'
                    style={{
                        position: 'absolute',
                        right: 10,
                        top: 10
                    }}
                    onClick={toggleShowDetail}
                >
                    { showDetail ? 'Hide Issue' : 'View Issue' }      
                </Button>
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
                        <span>Updated at {getLastUpdated(issue.updated_at)}</span>
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
                        padding-right: 40px;
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
            { showDetail ? <IssueDetail issue={ issue } /> : null }
        </div>
    )
}

function makeQuery(creator, state, labels) {
    let creatorStr = creator ? `creator=${creator}` : '';
    let stateStr = state ? `state=${state}` : '';
    let labelStr = '';
    if (labels && labels.length > 0) {
        labelStr = `labels=${labels.join(',')}`
    }

    const arr = [];

    if (creatorStr) arr.push(creatorStr);
    if (stateStr) arr.push(stateStr);
    if (labelStr) arr.push(labelStr);

    return `?${arr.join('&')}`;
}

const Option = Select.Option;

function Issues({ initialIssues, labels, owner, name }) {
    
    const [creator, setCreator] = useState();
    const [status, setStatus] = useState();
    const [label, setLabel] = useState([]);
    const [issues, setIssues] = useState(initialIssues);
    const [fetching, setFetching] = useState(false);

    const handleCreatorChange = useCallback(value => {
        setCreator(value);
    }, []);

    const handleStatusChange = useCallback(value => {
        setStatus(value);
    }, []);

    const handleLabelChange = useCallback(value => {
        setLabel(value);
    }, []);

    const handleSearch = useCallback(() => {
        setFetching(true);
        api.request({
            url: `/repos/${owner}/${name}/issues${makeQuery(creator, status, label)}`
        }).then(resp => {
            setIssues(resp.data);
            setFetching(false);
        }).catch(e => {
            console.log(e);
            setFetching(false);
        });
    }, [owner, name, creator, status, label]);

    return (
        <div className="root">
            <div className="search">
                <SearchUser 
                    onChange={handleCreatorChange}
                    value={creator}
                />
                <Select 
                    placeholder="Status"
                    onChange={handleStatusChange}
                    style={{
                        width: 200,
                        marginLeft: 20
                    }}
                >
                    <Option value="all">all</Option>
                    <Option value="open">open</Option>
                    <Option value="closed">closed</Option>
                </Select>
                <Select 
                    mode="multiple"
                    placeholder="Label" 
                    onChange={handleLabelChange}
                    style={{
                        flexGrow: 1,
                        marginLeft: 20,
                        marginRight: 20
                    }}
                    value={label}
                >
                    { labels.map(label => 
                        <Option
                            value={label.name} 
                            key={label.id}
                        >
                            {label.name}
                        </Option>
                    )}
                </Select>
                <Button 
                    type='primary'
                    onClick={handleSearch}
                    disabled={fetching}
                >
                    Search
                </Button>
            </div>
            {
                fetching ? 
                <div className="loading"><Spin /></div> 
                : 
                <div className="issues">
                    {issues.map(issue => <IssueItem issue={issue} key={issue.id}/>)}
                </div>
            }
            
            <style jsx>{`
                .issues {
                    border: 1px solid #eee;
                    border-radius: 5px;
                    margin-bottom: 20px;
                    margin-top: 20px;
                }
                .search {
                    display: flex
                }
                .loading {
                    height: 400px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            `}</style>
        </div>
    )
}

Issues.getInitialProps = async ({ ctx }) => {
    
    const { owner, name } = ctx.query;
    const fetchs = await Promise.all([
        await api.request({
            url: `/repos/${owner}/${name}/issues`
        }, ctx.req, ctx.res),
        await api.request({
        url: `/repos/${owner}/${name}/labels`
    }, ctx.req, ctx.res),
    ])

    return {
        owner,
        name,
        initialIssues: fetchs[0].data,
        labels: fetchs[1].data
    }
}

export default withRepoBasic(Issues, 'issues') ;