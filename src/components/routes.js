import React from "react";
import {Route, Switch} from "react-router";
import {Home, About, Blog, Post, Error} from '../pages';
import '../styles/page.css';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about/" component={About}/>
            <Route exact path="/blog/" component={Blog}/>
            <Route exact path="/blog/:post" component={Post}/>
            <Route path ="*"><Error/></Route>
        </Switch>
    )
};

export default Routes;