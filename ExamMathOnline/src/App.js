import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import "./grid.scss";
import Body from "./layouts/body/Body";
import Footer from "./layouts/footer/Footer";
import Header from "./layouts/header/Header";
import { makeSelectIsSuccessLogin } from "./redux/selectors/login";

function App(props) {
  return (
    <Router>
      <Header />
      <Switch>
        <Route
          path="/login"
          render={() =>
            props.statusFlags.isLoginSuccess ? <Body /> : <Login />
          }
        />
        <Route
          path="/signup"
          render={() =>
            props.statusFlags.isLoginSuccess ? <Body /> : <SignUp />
          }
        />
        <Route exact component={Body} />
      </Switch>
      <Footer />
    </Router>
  );
}
const mapStateToProps = createStructuredSelector({
  statusFlags: makeSelectIsSuccessLogin(),
});

export default connect(mapStateToProps, null)(App);
