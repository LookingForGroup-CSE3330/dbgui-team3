import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export class Login extends React.Component{
    state = {
        userName: '',
        password: ''
    }

    render(){
        return(
            <div className="container">
                    <div className="card">
                        <div className="card-header text-center">
                            Welcome!
                        </div>
                        <div className="card-body">
                            <h5 className="card-title text-center">Login</h5>
                            <form>
                                <div className="form-group row">
                                    <label htmlFor="userNameInput" className="col-2 col-form-label">Username</label>
                                    <div className="col">
                                        <input 
                                            type="text"
                                            className="form-control"
                                            id="userNameInput"
                                            name="userNameInput"
                                            placeholder="Username"
                                            value={this.state.userName}
                                            onChange={e => this.setState({userName: e.target.value})}
                                            required
                                        />
                                    </div> 
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="passwordInput" className="col-2 col-form-label">Password</label>
                                    <div className="col">
                                        <input 
                                            type="password"
                                            className="form-control"
                                            id="userNameInput"
                                            name="userNameInput"
                                            placeholder="Password"
                                            value={this.state.password}
                                            onChange={e => this.setState({password: e.target.value})}
                                            required  
                                        />
                                    </div> 
                                </div>
                                <div className="form-group row">
                                    <div className="col">
                                        <button 
                                            type="submit" 
                                            className="btn btn-primary btn-block"
                                            id="loginButton"
                                            name="loginButton"
                                        >
                                            Sign In
                                        </button>
                                    </div>  
                                </div>
                            </form>
                            <hr/>
                            <button 
                                type="button" 
                                className="btn btn-secondary btn-block"
                                id="createAccountButton"
                                name="createAccountButton"
                            >
                                Don't have an account? Sign up here!
                            </button>
                        </div>
                    </div>
            </div>
        )
    }
}