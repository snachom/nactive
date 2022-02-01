import { createContext, useEffect, useReducer } from "react";
import { authReducer } from "./authReducer";

export const AuthContext = createContext({
  logged: false,
  onLogout: () => {},
  onLogin: (user, password) => {}
});

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
}

export const AuthContextProvider = ({children}) => {

  const [ user, dispatch ] = useReducer(authReducer, {}, init)

  useEffect( () => {
    if(!user) return
    localStorage.setItem("user", JSON.stringify(user))
  }, [user])

  return (
    <AuthContext.Provider value={{
      user,
      dispatch
    }}>
      {children}
    </AuthContext.Provider>
  )
  
}
