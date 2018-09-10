import React from "react";
import { Router , Route , Switch } from "dva/router";
import Home from "./containers/Home.js";
import Author from "./containers/Author.js";
export default ({history,app})=>{
    return <Router history={history}>
        <Switch>
            <Route exact path="/" component = {Author}></Route>
        </Switch>
    </Router>
}