import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import { AccountRepository } from '../api/accountRepository';

export class SignUp extends React.Component{
    accountRepo = new AccountRepository();

    state = {
        username: '',
        password_p: '',
        email: '',
        about_me: '',
        credentials: '',
        checked: false,
    }

    handleCheck = this.handleCheck.bind(this);
    
    handleCheck(){
        this.setState({checked: !this.state.checked});
        console.log(this.state.checked);
    }

    onSubmit(){
        let accountInfo = {
            username: this.state.username,
            password_p: this.state.password_p,
            about_me: this.state.about_me,
            email: this.state.email,
            credentials: this.state.credentials
        }

        //localStorage.setItem('isdoc', this.state.checked);

        this.accountRepo.signUp(accountInfo)
            .then(x => {
                this.setState({redirect: '/login'})
            })
    }

    render(){
        const hiddenStuff = this.state.checked
           ? <div className="form-group" id="credBox">
                <label htmlFor="credInput">Credentials</label>
                <input 
                    type="text"
                    name="credInput"
                    id="credInput"
                    placeholder="M.D. University of School"
                    className="form-control"
                    value={this.state.credentials}
                    onChange={e => this.setState({credentials: e.target.value})}
                />
            </div> 
            : null;
            
            if(this.state.redirect) {
                return <Redirect to={this.state.redirect} />
            }

        return(
            <div className="container">
                <div className="card">
                    <div className="card-header text-center">
                        Create Your Account
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-center">Sign Up</h5>
                        <form>
                            <div className="form-group row">
                                <div className="col">
                                    <label htmlFor="userNameInput" >Username</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        id="userNameInput"
                                        name="userNameInput"
                                        placeholder="Username"
                                        value={this.state.username}
                                        onChange={e => this.setState({username: e.target.value})}   
                                        required
                                    />
                                </div>
                                <div className="col">
                                    <label htmlFor="passwordInput">Password</label>
                                    <input 
                                        type="password"
                                        className="form-control"
                                        id="passwordInput"
                                        name="passwordInput"
                                        placeholder="Password"
                                        value={this.state.password_p}
                                        onChange={e => this.setState({password_p: e.target.value})}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="emailInput">Email</label>
                                <input 
                                    type="email"
                                    className="form-control"
                                    id="emailInput"
                                    name="emailInput"
                                    placeholder="someone@example.com"
                                    value={this.state.email}
                                    onChange={e => this.setState({email: e.target.value})}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="aboutInput">About Me</label>
                                <textarea 
                                    name="aboutInput" 
                                    id="aboutInput" 
                                    className="form-control"
                                    value={this.state.about_me}
                                    onChange={e => this.setState({about_me: e.target.value})}
                                    >
                                </textarea>
                            </div>
                            <div className="form-group">
                                    <div className="form-check">
                                        <label htmlFor="isDoctor" className="form-check-label">Are you a doctor? </label>&nbsp;
                                        <input 
                                            type="checkbox"
                                            id="isDoctor"
                                            name="isDoctor"
                                            checked={this.state.checked}
                                            onChange={this.handleCheck}
                                        />
                                    </div>
                                    { hiddenStuff }
                                </div>
                            <hr/>
                            <div className="form-group row">
                                <div className="col">
                                    <button 
                                        type="button" 
                                        className="btn btn-primary btn-block"
                                        id="signUpButton"
                                        name="signUpButton"
                                        onClick={() => this.onSubmit()}
                                    >
                                        
                                        Sign Up
                                    </button>
                                </div>  
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}