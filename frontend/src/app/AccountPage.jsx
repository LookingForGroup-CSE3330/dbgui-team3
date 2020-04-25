import React from "react";
import {Link} from 'react-router-dom';
import {AccountRepository} from './../api/accountRepository';
import { QuestionRepository } from "../api/questionRepository";
import { AnswerRepository } from "../api/answerRepository";

export class AccountPage extends React.Component {
  accountRepository = new AccountRepository();
  questionRepository = new QuestionRepository();
  answerRepository = new AnswerRepository();

  state = {
    account: [],
    posts: []
  };


componentDidMount(){
  let username = this.props.match.params.username;
  if(username){
    this.accountRepository.getAccount(username)
    .then(result => {
      //console.log(result);
      this.setState({account: result});
    });
    
    this.questionRepository.getPost(username)
    .then(res =>{
      //console.log(res);
      this.setState({posts: res});
    })
  }
}


  render() {
    return (
      <>     
      {/*Profile Part */}
      {console.log("here")}
      {console.log(this.state.account)}
      {console.log(this.state.posts)}
      <div className="container-fluid">
                <div
                  className="container"
                  style={{ width: "20vw", float: "left", paddingTop: "3em" }}
                >
                  <ul className="list-group">
                    <li className="list-group-item text-center">
                      <p style={{ fontWeight: "bold" }}>My Profile</p>
                    </li>
                    {this.state.account.map(account => (
                    <li className="list-group-item" style={{ height: "80vh" }} key={account.usr_id}>
                      <div className="card-body">

                        <h5 className="card-title">{account.username}</h5>
                        <p className="card-text">
                          {account.about_me}
                        </p>
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">{account.email}</li>
                        <li className="list-group-item">Phone Number</li>
                        <li className="list-group-item">Other?</li>
                      </ul>
                      
                      <div className="card-body">
                        <p>
                          Edit Profile
                        </p>
                      </div>
                    </li>
                    ))}
                  </ul>
                </div>
                

                {/*Comments*/}
                <div
                  className="container"
                  style={{ width: "80vw", paddingTop: "3em" }}
                >
                  <ul className="list-group">
                    <li className="list-group-item text-center">
                      <p style={{ fontWeight: "bold" }}>My Questions</p>
                    </li>
                    {this.state.posts.map(post => (
                    <li className="list-group-item" key={post.post_id}>
                      <div className="row">
                        <div className="col-xs-10 col-md-11">
                          <div>
                            <h4>
                              {post.question}
                            </h4>
                          </div>
                          <div className="action">
                            <button
                              type="button"
                              className="btn btn-primary btn-xs"
                              title="Edit"
                            >
                              <span className="glyphicon glyphicon-pencil" />
                            </button>
                          </div>
                          <p>{post.creation_date}</p>
                          <Link className="btn btn-link"  to={'../answers/' + post.post_id}>View Answer(s)</Link>
                        </div>
                      </div>
                    </li>                
                    ))}
                  </ul>
                </div>
              </div>
      </>
    );
  }
}