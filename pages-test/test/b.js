import React ,{ useState, useEffect, useContext ,useReducer, useRef, memo, useMemo, useCallback}from 'react';
import MyContext from '../../lib/my-context';

function countReducer(state, action) {
    switch (action.type) {
        case 'add':
            return state + 1;
        case 'minus':
            return state - 1;
        default:
            return state;
    }
}

function MyCount() {
    const [ count, dispatchCount ] = useReducer(countReducer, 0);
    const [ name, setName ] = useState('tony'); 
    const context = useContext(MyContext);
    const inputRef = useRef();

    //规避闭包问题
    const countRef = useRef();
    countRef.current = count;
    //shouldComponentUpdate 
    const config = useMemo(() => ({
        text: `count is ${count}`,
        color: count > 3 ? 'red' : 'blue'
    }), [count]);

    useEffect(() => {
        console.log(inputRef);
        return () => console.log('effect deleted');
    }, [count])

    //shouldComponentUpdate by useCallback, 是专门为function准备的useMemo 
    // const handleButtonClick = useCallback(() => dispatchCount({ type: "add"}),[]);

    //shouldComponentUpdate by useMemo
    const handleButtonClick = useMemo(
        () => () => dispatchCount({
            type: 'add'
        }), []
    );

    const handleAlertButtonClick = () => {
        setTimeout(() => {
            alert(countRef.current)
        }, 2000)
    }

    return ( 
        <div>
            <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
            <Child 
                config={config}
                onButtonClick={handleButtonClick}
            />
            <button onClick={handleAlertButtonClick}>alert count</button>
            <span>{context}</span>
        </div>
    )
}

//memo component
const Child = memo(function Child({ onButtonClick, config }) {
    console.log('child render')
    return (
        <button onClick={onButtonClick} style={{color: config.color}}>
            {config.text}
        </button>
    )
})

export default MyCount ;