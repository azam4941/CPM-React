import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

export default class Login extends React.Component {
    constructor (props){
        super(props)
        const token = localStorage.getItem("token")

        let loggedIn =true
        if(token == null){
            loggedIn=false
        }
        this.state={
            username:'',
            password:'',
            loggedIn
        }
        this.onChange =this.onChange.bind(this)
        this.submitForm =this.submitForm.bind(this)
    }


    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

     submitForm(e){
        e.preventDefault()
        const {username,password }=this.state

        if(username==="POD@6" && password === "123"){
            localStorage.setItem("token","asssdfghjkl")
            this.setState({
                loggedIn: true

            })
        }
    } 
render() {
    if(this.state.loggedIn){
        return <Redirect to="/admin"/>
    }
  return (
            <div style={{ width: "40%", marginLeft: "40%", marginTop: "10%" }}>
                <h2>Admin Login!!</h2>

                
                <form onSubmit={this.submitForm}>
                    <label>Admin UserID</label><br/>
                    <input type="text" placeholder="username" name="username" Value={this.state.username} onChange ={this.onChange}/>
                    <br/>
                    <label>Password</label><br/>
                    <input type="password" placeholder="password" name="password" Value={this.state.password} onChange ={this.onChange}/>
                    <br/><br/>
                    <input  type="submit" />
                    
                    
                </form>
                
            </div>
        )
    }
}
