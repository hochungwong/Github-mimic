import { cloneElement } from 'react';

const style = {
    width: '100%',
    maxWidth: 1200,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 20,
    paddingRight: 20, 
}

//alleviate div tag
export default ({ children, renderer= <div /> }) => {
    const compStyle = Object.assign({}, renderer.props.style, style);
    const newElement = cloneElement(renderer, {
        style: compStyle,
        children,
    });
    return newElement ;
}; 