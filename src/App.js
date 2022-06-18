import { Fragment } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./Signup/signup";
import Compose from "./components/Pages/mailbox/mailCompse";
import Layout from "./components/NavBar/Layout";
function App() {
  return (
    <Fragment>
      <Switch>
        <Layout/>
        <Route path="/auth" >
        <LoginPage/>
        </Route>
        <Route path="/mailbox">
          <Compose />
        </Route>
        <Route path="/welcome"></Route>
      </Switch>
    </Fragment>
  );
}

export default App;
