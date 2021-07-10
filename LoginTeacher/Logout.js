import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Link, Redirect } from 'react-router-dom';
import LoginUser from '../LoginUser';

export default class Logout extends Component {
    constructor(props){
        super(props)
        
    }
    render() {
        return (
            <div >
                
                <Router>
                <Route path='/signin' component={LoginUser} />
                </Router>
                
            </div>
        )
    }
}