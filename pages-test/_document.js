import Document , { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
//hoc
function withLog(Comp) {
    return props => {
        console.log(props)
        return <Comp { ...props }/>
    }
}

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        try {
            ctx.renderPage = () => originalRenderPage({
                //collectStyles 提供增强的第三方库和服务端渲染集成
                enhanceApp: App => props => sheet.collectStyles( <App { ...props }/>),
            });
            const props = await Document.getInitialProps(ctx);
            return {
                ...props,
                styles: (
                    <> 
                        {props.styles} 
                        {sheet.getStyleElement()}
                    </>
                )
            }
        } finally {
            sheet.seal();
        }
        
        
    }
    render() {
        return (
            <Html>
                <Head>
                </Head>
                <body>
                    <Main/>
                    <NextScript />
                </body>
            </Html>
        )
        
    }
}

export default MyDocument;