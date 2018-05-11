import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactsPage from "./components/ContactsPage";
import NotFoundPage from "./components/NotFoundPage";

const Routes = () => (

    <Switch>
      <Route exact path= "/" component = {HomePage} />
        <Route path = "/about" component = {AboutPage}/>
        <Route path = "/contacts" component = {ContactsPage}/>

        <Redirect from= "/about-us" to= "about"/>
        <Route component = {NotFoundPage} />

    </Switch>
);

export default Routes;