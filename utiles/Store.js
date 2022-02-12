import Cookies from 'js-cookie';
import { createContext, useReducer } from 'react';

export const Store = createContext();
const defaultDarkMode = Cookies.get('darkMode');
// console.log(defaultDarkMode);
const initialState = {
  darkMode: defaultDarkMode === 'on' ? true : false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'DARK_MODE_ON':
      return { ...state, darkMode: true };
    case 'DARK_MODE_OFF':
      return { ...state, darkMode: false };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
