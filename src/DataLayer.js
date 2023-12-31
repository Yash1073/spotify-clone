import React, { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext();
export const DataLayer = ({ initialState, reducer, children }) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children} 
    </DataLayerContext.Provider>
    // 1 -> many 
);

export const useDataLayerValue = () => useContext(DataLayerContext);