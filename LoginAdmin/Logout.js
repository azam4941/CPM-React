import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

export default class Logout extends Component {
    constructor(props){
        super(props)
        localStorage.removeItem("token")
    }
    render() {
        return (
            <div style={{ width: "40%", marginLeft: "35%", marginTop: "10%" }}>
                <h2>You have been logged out!!</h2>
                
                <Link to="/">Login Again</Link>
            </div>
        )
    }
}
