import React, {useState} from "react";
import {createContext} from "react";

export const UserContext = createContext({});

// eslint-disable-next-line react/prop-types
export function UserContextProvider({children}){
    const[userInfo, setUserInfo] = useState({});
    // eslint-disable-next-line react/react-in-jsx-scope
    return (
        <UserContext.Provider value={{userInfo, setUserInfo}}>
            {/* eslint-disable-next-line react/react-in-jsx-scope */}
            {children}
        </UserContext.Provider>
    );
}