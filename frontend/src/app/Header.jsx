import React from 'react';
import {Link} from 'react-router-dom';


export class Header extends React.Component {

    state= {
        sessionUser: ""
    }

    componentDidMount(){
        console.log("Username in Local Storage");
        console.log(localStorage.getItem('username'));
        console.log(typeof localStorage.getItem('username'));
        this.setState({sessionUser: localStorage.getItem('username')});
    }

    onLogout(){
        localStorage.setItem('username', ""); 
        localStorage.setItem('currentId', "")
        localStorage.setItem('role', "");
        localStorage.setItem('loggedin', "no");
        window.location.reload(true);
    }

    render() {
        return(
            <>
            <div className="container-fluid">
                <nav className="navbar bg-info">
                    <Link style={{color: 'white', fontSize: '2em'}} to="/">Medical OverFlow</Link>  
                    <Link style={{color: 'white', fontSize: '1.5em'}} to="/login">Login/Register</Link>
                    <Link style={{color: 'white', fontSize: '1.5em'}} to={'/users/' + this.state.sessionUser}>Profile</Link>
                    <Link className="btn btn-warning" style={{margin: '.5em'}} to="/cq">Ask Question</Link>
                    <button
                        type="button"
                        className="btn btn-danger"
                        title="Edit"
                        onClick={() => this.onLogout()}
                    >
                    <span className="glyphicon glyphicon-pencil" />Logout
                    </button>
                </nav>
            </div>        
            </>
        )
    }
}
/*
<Link style={{color: 'white', fontSize: '2em'}} to="/">Medical OverFlow</Link>                 
<Link style={{color: 'white', fontSize: '1.5em'}} to="/users/username2222">Profile</Link>
<Link className="btn btn-warning" style={{margin: '.5em'}} to="/cq">Ask Question</Link>
*/