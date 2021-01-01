import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/home";
import Factures from "../pages/factures";
import Nomin from "../pages/nomin";

function routerApp() {
    return(

        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/facturas" component={Factures}/>
                <Route path="/nominas" component={Nomin}/>
            </Switch>
        </BrowserRouter>
    )
}

export default routerApp