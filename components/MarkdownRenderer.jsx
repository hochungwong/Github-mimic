import MarkdownIt from 'markdown-it';
import 'github-markdown-css';

import { memo, useMemo } from 'react';

const md = new MarkdownIt({
    html: true,
    linkify: true
});

//decode Chinese
function b64_to_utf8(str) {
    return decodeURIComponent(escape(atob(str)));
}

export default memo(function MarkdownRenderer({ content, isBase64 }) {
    
    const markdown = isBase64 ? b64_to_utf8(content) : content;
    //re-render only if the markdown changes
    const html = useMemo(() => 
        md.render(markdown)
    , [markdown]);

    return (
        <div className="markdown-body">
            <div dangerouslySetInnerHTML={{ __html: html }} />  
        </div>
    )
});