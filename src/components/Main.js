import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../containers/Dashboard';
import Vote from '../containers/Vote';

class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Dashboard}/>
                <Route path='/vote' component={Vote}/>
            </Switch>
        )
    }
}


export default Main;