import React ,{ useState, useEffect, useContext ,useReducer, useRef }from 'react';
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
    // const [count, setCount] = useState(0);
    const [ count, dispatchCount ] = useReducer(countReducer, 0);
    const [ name, setName ] = useState('tony'); 
    const context = useContext(MyContext);
    const inputRef = useRef();
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         //latest value
    //         //closure trap
    //         // setCount(c => c + 1)
    //         dispatch({
    //             type: "add"
    //         })
    //     }, 1000);
    //     //componentWillUnmount, clear up the subscription
    //     return () => clearInterval(interval);
    // }, [])
    //componentDidMount + componentDidUpdate
    //第二个参数是在外部声明的state -> dependencies
    useEffect(() => {
        console.log(inputRef);
        return () => console.log('effect deleted');
    }, [count])

    //componentWillMount
    // useLayoutEffect(() => {
    //     console.log('layout effect invoked')
    //     return () => console.log('layout effect deleted');
    // }, [count])
    return ( 
        <div>
            <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={() => dispatchCount({type: "add"})}>
                {count}
            </button>
            <p>{context}</p>
        </div>
    )
}

export default MyCount ;