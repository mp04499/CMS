import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {

    const [token, setToken] = useState({});

    return (
        <UserContext.Provider value={{ token, setToken }}>
            {props.children}
        </UserContext.Provider>
    )

}