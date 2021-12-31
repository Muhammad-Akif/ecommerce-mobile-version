import React, { useState, createContext, useContext } from 'react';

const ResultContext = createContext();

export const ContextProvider = ({ children }) => {

    const [results, setResults] = useState(['Doctor Rafeh']);

    return (
        <ResultContext.Provider value={{ results }}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext);






