import withRepoBasic from '../../components/with-repo-basic';

function Detail({ text }) {
    return <span>Detail Index { text }</span>
}

Detail.getInitialProps = async () => {
    console.log('detial get init')
    return {
        text: 123
    }
}

export default withRepoBasic(Detail, 'readme') ;