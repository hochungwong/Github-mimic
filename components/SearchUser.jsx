import { Select, Spin } from 'antd';
import { useState } from 'react';

import api from '../lib/api';

const Option = Select.Option;

function SearchUser() {
    
    const [fetching, setFetching] = useState(false);
    const [options, setOptions] = useState([]);

    const fetchUser = value => {
        console.log('fetching user', value);

        setFetching(true);
        setOptions([]);

        // !isServer
        api.request({
            url: `/search/users?q=${value}`
        }).then(resp => {
            console.log('user', resp);
            const data = resp.data.items.map(user => ({
                text: user.login,
                value: user.login
            }));
            
            setFetching(false);
            setOptions(data);
        });
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