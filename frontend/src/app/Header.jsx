import React from 'react';
import {Link} from 'react-router-dom';

export class Header extends React.Component {

    render() {
        return(
            <>

            <div className="container-fluid">
                <nav className="navbar bg-info" style={{height: '5em'}}>
                    <Link style={{color: 'white', fontSize: '2em'}} to="/">Medical OverFlow</Link>
                    <Link className="btn btn-warning"  to="/cq">Ask Question</Link>
                    <Link style={{color: 'white', fontSize: '1.5em'}} to="/users/username2222">Profile</Link>
                </nav>
            </div>

            {/*}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    Medical Questions Site
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">
                        Home <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                        My Profile
                        </a>
                    </li>
                    <li className="nav-item">
                        <li className="nav-item">
                        <button type="button" className="btn btn-primary btn-lg">
                            Ask a Question
                        </button>
                        </li>
                    </li>
                    </ul>
                </div>
                </nav>    
        */}        
            </>
        )
    }
}