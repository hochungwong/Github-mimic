import { Select, Spin } from 'antd';
import { useState, useCallback, useRef } from 'react';
import debounce from 'lodash/debounce'; 

import api from '../lib/api';

const Option = Select.Option;

function SearchUser({ onChange, value }) {
    // { current: 0 }
    //avoid closure
    const lastFetchIdRef = useRef(0);
    const [fetching, setFetching] = useState(false);
    const [options, setOptions] = useState([]);

    //debounce 防抖
    const fetchUser = useCallback(debounce(value => {

        lastFetchIdRef.current += 1;
        const fetchId = lastFetchIdRef.current;

        setFetching(true);
        setOptions([]);

        // !isServer
        api.request({
            url: `/search/users?q=${value}`
        }).then(resp => {
            console.log('user', resp);
            if (fetchId !== lastFetchIdRef.current) {
                return;
            }
            const data = resp.data.items.map(user => ({
                text: user.login,
                value: user.login
            }));
            
            setFetching(false);
            setOptions(data);
        });
    }, 500), []);

    const handleChange = value => {
        setOptions([]);
        setFetching(false);

        onChange(value);
    }
 
    return (
        <Select
            style={{ width: 200 }}
            showSearch={true}
            notFoundContent={
                fetching ? 
                    <Spin size='small'/>
                :
                    <span>Nothing</span>
            }
            filterOption={false}
            placeholder='Creator'
            allowClear={true}
            onSearch={fetchUser}
            onChange={handleChange}
            value={value}
        >
            {
                options.map(option => (
                    <Option 
                        value={option.value}
                        key={option.value}
                    >
                        {option.text}
                    </Option>
                ))
            }
        </Select>
    )
}

export default SearchUser ;