import React from 'react';
import {Link} from 'react-router-dom';

export class Header extends React.Component {

    state= {}

    componentDidMount(){
        console.log("LOL");
        console.log(localStorage.getItem('username'));
        console.log(typeof localStorage.getItem('username'));
    }

    render() {
        return(
            <>
            <div className="container-fluid">
                <nav className="navbar bg-info">
                    <Link style={{color: 'white', fontSize: '2em'}} to="/">Medical OverFlow</Link>  
                    <Link style={{color: 'white', fontSize: '1.5em'}} to={'/users/' + localStorage.getItem('username')}>Profile</Link>
                    <Link style={{color: 'white', fontSize: '1.5em'}} to="/login">Login/Register</Link>
                    <button
                        type="button"
                        className="btn btn-danger"
                        title="Edit"
                    >
                    <span className="glyphicon glyphicon-pencil" />Logout
                    </button>
                    <Link className="btn btn-warning" style={{margin: '.5em'}} to="/cq">Ask Question</Link>
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