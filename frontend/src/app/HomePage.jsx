import React from "react";
import {AccountRepository} from './../api/accountRepository';

export class HomePage extends React.Component {
  state = {};

  accountRepository = new AccountRepository();
  
  componentDidMount(){
    this.accountRepository.test()
    .then(sample => {
      console.log(sample);
    });
  }

  render() {
    return (
      <>
        <div className="container-fluid">
          {/*Comments*/}
          <div
            className="container-fluid"
            style={{ width: "99vw", paddingTop: "3em" }}
          >
            <ul className="list-group">
              <li className="list-group-item text-center">
                <p style={{ fontWeight: "bold" }}>My Questions</p>
              </li>
              <li className="list-group-item">
                <div className="row">
                  <div className="col-xs-10 col-md-11">
                    <div>
                      <h4>
                        Here is a medical question that this profile asked...
                      </h4>
                    </div>
                    <div className="comment-text">Lorem ipsum ........</div>
                    <div className="action">
                      <button
                        type="button"
                        className="btn btn-primary btn-xs"
                        title="Edit"
                      >
                        <span className="glyphicon glyphicon-pencil" />
                      </button>
                    </div>
                  </div>
                </div>
              </li>

              <li className="list-group-item">
                <div className="row">
                  <div className="col-xs-10 col-md-11">
                    <div>
                      <h4>
                        Here is a medical question that this profile asked...
                      </h4>
                    </div>
                    <div className="comment-text">Lorem ipsum ........</div>
                    <div className="action">
                      <button
                        type="button"
                        className="btn btn-primary btn-xs"
                        title="Edit"
                      >
                        <span className="glyphicon glyphicon-pencil" />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}