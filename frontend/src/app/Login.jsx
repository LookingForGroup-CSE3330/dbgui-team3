import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import { AccountRepository } from '../api/accountRepository';

export class Login extends React.Component{

    accountRepo = new AccountRepository();

    state = {
        userName: '',
        password: '',
        loginSuccess: false
    }

    signIn() {
        this.setState({loginSuccess: false});

        var loginData = {
            userName: this.state.userName,
            password: this.state.password
        }

        this.accountRepo.login(loginData)
            .then(x => {
                if(x.error) {
                    this.setState({loginSuccess: false});
                }
                else {
                    this.setState({loginSuccess: true});
                    this.props.history.push({pathName: '/'});
                }
            })
    }

    render(){
        return(
            <>
            {this.state.loginSuccess && <Redirect to='/' />}
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
                                            type="sbutton" 
                                            className="btn btn-primary btn-block"
                                            id="loginButton"
                                            name="loginButton"
                                            onClick={() => this.signIn()}
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
            </>
        )
    }
}