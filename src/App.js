import { Fragment, useContext } from "react";
import { BrowserRouter as Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import MailBoxContext from "./Store/Context-Provider";
import LoginPage from "./Signup/signup";
import Compose from "./components/Pages/mailbox/mailCompse";
import Layout from "./components/NavBar/Layout";
import HomePage from "./components/Pages/HomePage/HomePage";
function App() {
  const conCtx = useContext(MailBoxContext);
  return (
    <Fragment>
      <Switch>
        <Layout />
        {!conCtx.isLoggedIn && (
          <Route path="/auth">
            <LoginPage />
          </Route>
        )}
        {conCtx.isLoggedIn && (
          <Route path="/mailbox">
            <Compose />
          </Route>
        )}
        {conCtx.isLoggedIn &&(
          <Route path="/home">
            <HomePage/>
          </Route>
        )}
      
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
