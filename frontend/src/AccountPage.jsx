import React from "react";

export class AccountPage extends React.Component {
  state = {};

  render() {
    return (
      <>
      <div className="container-fluid">
        <div className="container" style={{width: '25vw', float: 'left', paddingTop: '3em'}} >
          <ul className="list-group">
            <li className="list-group-item text-center" >
              <p style={{fontWeight: 'bold'}}>My Profile</p>
            </li>
          </ul>
        </div> 
        <div className="container" style={{width: '25vw', float: 'right', paddingTop: '3em'}} >
          <ul className="list-group">
            <li className="list-group-item text-center" >
              <p style={{fontWeight: 'bold'}}>Nav/Other</p>
            </li>
          </ul>
        </div>       
        <div className="container" style={{width: '50vw', paddingTop: '3em'}} >
          <ul className="list-group">
            <li className="list-group-item text-center" >
              <p style={{fontWeight: 'bold'}}>My Questions</p>
            </li>
          </ul>
        </div>
      </div>
      </>
    );
  }
}