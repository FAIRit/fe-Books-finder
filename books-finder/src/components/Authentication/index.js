import React from 'react';
import UserProvider from "../UserProvider";

export default ({ children }) => {
    return <UserProvider>
        {(user) => {
            return user
                ? children
                : <h2 style={{textAlign: "center", marginTop: 20}}>Please sign in!</h2>;
        }}
    </UserProvider>
};
