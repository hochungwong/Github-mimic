import { withRouter } from 'next/router';

function Search({ router }) {
    //get query
    return <span>{router.query.query}</span>
}

export default withRouter(Search);