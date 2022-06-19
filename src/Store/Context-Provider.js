import React, { useState } from "react";

const MailBoxContext = React.createContext({
  token: "",
  email: "",
  isLoggedIn: true,
  login: (token, email) => {},
  logout: () => {},
});

export const MailBoxContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const [email, setEmail] = useState("");
  const userIsLoggedIn = !!token;

  const loginHandler = (token, email) => {
    setToken(token);
    setEmail(email);
    localStorage.setItem("token", token);
    localStorage.setItem("Email", email);
  };
  const logoutHandler = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem("token");
    localStorage.removeItem("Email");
  };

  const contextValue = {
    token: token,
    email: email,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <MailBoxContext.Provider value={contextValue}>
      {props.children}
    </MailBoxContext.Provider>
  );
};
export default MailBoxContext;
