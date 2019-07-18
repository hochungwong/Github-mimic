import { withRouter } from 'next/router';
import Link from 'next/link';
import getConfig from 'next/config';
import dynamic from 'next/dynamic';

import styled from 'styled-components';

//async component
const Comp = dynamic(import('../components/comp'));

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const Title = styled.h1`
    color: yellow;
    font-size: 40px;
`

const A = ({ router, name ,time }) => {
    console.log(serverRuntimeConfig, publicRuntimeConfig);
    return (
        <>
            <Title>This is a title { time } </Title>
            <Comp />
            <Link href="#aaa">
                <a className="link">
                    A { router.query.id } { name }  { process.env.customKey }
                </a>
            </Link>
            <style jsx>
                {`
                    a {
                        color: blue;
                    }
                    .link {
                        color: red;
                    }
                `}
            </style>
            {/* global style - only a component*/}
            <style global jsx>
                {`
                    a {
                        color: green;
                    }
                `}
            </style>
        </>
    )
}

//execute both on client and server
A.getInitialProps = async ctx => {
    //lazy loading modules - async modules
    const moment = await import('moment');
    const promise = new Promise(resolve => {
        setTimeout(() => {
            resolve({
                name: 'carson',
                time: moment.default(Date.now() - 60 * 1000).fromNow()
            })
        }, 1500)
    })

    return await promise;
}

export default withRouter(A);