import React, { useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = React.createContext();

export default function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(localStorage.getItem("accessToken"));

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthContextProvider.propTypes = {
  children: PropTypes.node,
};