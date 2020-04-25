import React from 'react';

export class SignUp extends React.Component{
    state = {
        username: '',
        password_p: '',
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        isDoctor: 0,
        email: '',
        phoneNumber: '',
        about_me: ''
    }

    render(){
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
                                    <label htmlFor="fNameInput">First Name</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        id="fNameInput"
                                        name="fNameInput"
                                        placeholder="First name"
                                        value={this.state.firstName}
                                        onChange={e => this.setState({ firstName: e.target.value})}
                                        required
                                    />
                                </div>
                                <div className="col">
                                    <label htmlFor="lNameInput">Last name</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        id="lNameInput"
                                        name="lNameInput"
                                        placeholder="last name"
                                        value={this.state.lastName}
                                        onChange={e => this.setState({ lastName: e.target.value})}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col">
                                    <label htmlFor="userNameInput" >Username</label>
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
                                <div className="col">
                                    <label htmlFor="passwordInput">Password</label>
                                    <input 
                                        type="password"
                                        className="form-control"
                                        id="passwordInput"
                                        name="passwordInput"
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={e => this.setState({password: e.target.value})}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col">
                                    <label htmlFor="emailInput">Email</label>
                                    <input 
                                        type="email"
                                        className="form-control"
                                        id="emailInput"
                                        name="emailInput"
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={e => this.setState({email: e.target.value})}
                                        required
                                    />
                                </div>
                                <div className="col">
                                    <label htmlFor="phoneInput">Phone</label>
                                    <input 
                                        type="tel"
                                        className="form-control"
                                        id="phoneInput"
                                        name="phoneInput"
                                        pattern="[0-9]{10}"
                                        value={this.state.phoneNumber}
                                        onChange={e => this.setState({phoneNumber: e.target.value})}
                                        required
                                    />
                                </div>   
                            </div>
                            <div className="form-group row">
                                <div className="col">
                                    <label htmlFor="ageInput">Age</label>
                                    <input 
                                        type="date"
                                        className="form-control"
                                        id="ageInput"
                                        name="ageInput"
                                        value={this.state.age}
                                        onChange={e => this.setState({age: e.target.value})}
                                        required
                                    />
                                </div>
                                <div className="col">
                                    <label htmlFor="genderInput">Gender</label>
                                    <select 
                                        name="genderInput" 
                                        id="genderInput"
                                        className="form-control"
                                        required
                                    >
                                        <option selected>Choose...</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                    <div className="form-check">
                                        <input 
                                            type="checkbox"
                                            id="isDoctor"
                                            name="isDoctor"
                                            className="form-check-input"
                                            value={this.state.isDoctor}
                                            onChange={e => this.setState({age: e.target.value})}
                                        />
                                        <label htmlFor="isDoctor" className="form-check-label">Are you a doctor?</label>
                                    </div>
                                </div>
                            <hr/>
                            <div className="form-group row">
                                <div className="col">
                                    <button 
                                        type="submit" 
                                        className="btn btn-primary btn-block"
                                        id="signUpButton"
                                        name="signUpButton"
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