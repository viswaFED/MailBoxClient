import React, {  } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
// import { useHistory } from "react-router-dom";
// import ExpenseContext from "../../Store/Context-Provider";

const Header = () => {
  // const history = useHistory();
  // const conCtx = useContext(ExpenseContext);
  // const isLoggedIn = conCtx.isLoggedIn;

  // const logoutHandler = (event) => {
  //   event.preventDefault();
  //   localStorage.setItem("Token", "");
  //   localStorage.setItem("userID", "");
  //   localStorage.setItem("Email", "");
  //   // conCtx.logout()
  //   history.replace("/login");
  // };
  return (
    <header className={classes.header}>
      <NavLink to="/home">
        <div className={classes.logo}>MailBox Client</div>
      </NavLink>
      <nav>
        <ul>
          <li>
            <button>
              <NavLink to="/auth">Login</NavLink>
            </button>
          </li>

          <li>
            <button>
              <Link to="/mailbox">Add Expense</Link>
            </button>
          </li>

          <li>
            <button>
              <Link to="/profile">Update Profile</Link>
            </button>
          </li>

          <li>
            <button >Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
