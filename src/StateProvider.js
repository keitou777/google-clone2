import React, { createContext, useContext, useReducer } from "react";

// preparing the data layer
export const StateContext = createContext();

export const StateProvider = ({ initialState, reducer, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Hook which allows us to pull information from data layer("the state")
export const useStateValue = () => useContext(StateContext);
