import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { useHistory } from "react-router-dom";
import MailBoxContext from "../../Store/Context-Provider";

const Header = () => {
  const history = useHistory();
  const conCtx = useContext(MailBoxContext);
  const isLoggedIn = conCtx.isLoggedIn;

  const logoutHandler = (event) => {
    event.preventDefault();
    localStorage.setItem("Token", "");
    localStorage.setItem("userID", "");
    localStorage.setItem("Email", "");
    conCtx.logout();
    history.replace("/auth");
  };
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <button>
                <Link to="/auth">Login</Link>
              </button>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button>
                <Link to="/home">Home</Link>
              </button>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button>
                <Link to="/mailbox">Mailbox</Link>
              </button>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
