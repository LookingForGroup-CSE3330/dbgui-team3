import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import { AccountRepository } from '../api/accountRepository';

export class Login extends React.Component{

    accountRepo = new AccountRepository();

    state = {
        userName: '',
        password_p: '',
    }

    signIn() {
        this.accountRepo.login(this.state)
            .then(x => {
                
                this.setState({ redirect: '/' });
            })

        
    }

    render(){
        if(this.state.redirect){
            return <Redirect to={ this.state.redirect } />
        }

        return(
            <>
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
                                            onClick={() => this.signIn()}
                                        >
                                            Sign In
                                        </button>
                                    </div>  
                                </div>
                            </form>
                            <hr/>
                            <Link 
                                to={'signUp'}
                                className="btn btn-secondary btn-block"
                                id="creatAccountButton"
                                name="createAccountButton"
                            >
                                Don't have an account? Sign up here! 
                            </Link>
                        </div>
                    </div>
            </div>
            </>
        )
    }
}