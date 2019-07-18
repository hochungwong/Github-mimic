import { useEffect } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';

import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const Index = ({username, rename, add}) => {

    useEffect(() => {
        axios.get('/api/user/info').then(resp => {
            console.log(resp);
        })
    }, []);
    
    return (
        <>
            <a >Username: {username}</a>
            <input value={username} onChange={e => rename(e.target.value)}/>
            <a href={ publicRuntimeConfig.OAUTH_URL } >login</a>
        </>
    )
}

Index.getInitialProps = async ({ reduxStore }) => {
    console.log(reduxStore);
    return {} ;
}

const mapStateToProps = state => {
    return {
        username: state.user.username
    }
}
const mapDispatchToProps = dispatch => {
    return {
        add: num => dispatch({type: 'ADD', num}),
        rename: name => dispatch({type: 'UPDATE_USERNAME', name})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Index) ;
