import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Contact from "./Contact";
import Footer from "./Footer";
import {Route, Switch, Redirect} from "react-router-dom";
import Navbar from "./Navbar";

const App = () => {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/"  component={Home} />
      <Route exact path="/"  component={Home} />
      <Route exact path="/"  component={Home}  />
      <Route exact path="/contact"  component={Contact} />
      <Redirect to="/" />
      <Home />
    </Switch>
    <Footer />

    </>
  );
};

export default App;
