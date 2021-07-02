import React, { createContext, useReducer } from "react";

const initialState = {
    "--header-bg-color": "rgba(132, 7, 221, 1)",
    "--header-text-color": "rgba(255, 255, 255,1",
    "--header-text-size": "24px",
    "--quiz-header-bg-color": "rgba(248, 248, 248,1)",
    "--quiz-header-text-color": "rgba(82, 82, 82,1)",
    "--pill1-text-color": "rgba(255, 165, 0, 1)",
    "--pill1-bg-color": "rgba(103, 128, 159, 1)",
    "--pill2-bg-color": "rgba(255, 165, 0, 1)",
    "--pill2-text-color": "rgba(103, 128, 159, 1)",
    "--button-primary-color": "rgba(132, 7, 221,1)",
    "--button-secondary-color": "rgba(174, 115, 216,1)",
    "--answer-button-color": "rgba(66, 208, 166,1)",
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    
    switch (action.type) {
      case "UPDATE_VARS":
        const newState = { ...state, [action.payload.key]: action.payload.value };
        return newState;
      
      default:
        return state;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
