import React from "react";
import {Route, Switch} from "react-router";
import {Home, About, Blogs, Blog, Error} from '../pages'
import '../styles/page.css'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about/" component={About}/>
            <Route exact path="/home/" component={Home}/>
            <Route exact path="/blogs/" component={Blogs}/>
            <Route exact path="/blogs/:blog" component={Blog}/>
            <Route path ="*"><Error/></Route>
        </Switch>
    )
};

export default Routes;