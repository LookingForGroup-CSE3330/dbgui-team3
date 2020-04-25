import React from 'react';
import {Link} from 'react-router-dom';

export class Header extends React.Component {

    render() {
        return(
            <>
            <div className="container-fluid">
                <nav className="navbar bg-info">
                    <Link style={{color: 'white', fontSize: '2em'}} to="/">Medical OverFlow</Link>  
                    <Link style={{color: 'white', fontSize: '1.5em'}} to="/users/username2222">Profile</Link>
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