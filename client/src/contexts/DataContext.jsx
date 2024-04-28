import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);

    const setUser = (user) => {
        setUserData(user);
    };

    return (
        <DataContext.Provider value={{ userData, setUser }}>
            {children}
        </DataContext.Provider>
    );
};
