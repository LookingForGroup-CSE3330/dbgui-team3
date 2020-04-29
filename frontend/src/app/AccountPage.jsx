import React from "react";
//import {Link} from 'react-router-dom';
import {AccountRepository} from './../api/accountRepository';
import { QuestionRepository } from "../api/questionRepository";
import { AnswerRepository } from "../api/answerRepository";
import {BrowserRouter as Redirect} from 'react-router-dom';
import { Link } from 'react-router-dom';

export class AccountPage extends React.Component {
  accountRepository = new AccountRepository();
  questionRepository = new QuestionRepository();
  answerRepository = new AnswerRepository();

  state = {
    account: [],
    posts: [],
    editEmail: false,
    editAbout: false,
    showAns: false,
    showQs: true,
    newEmail: "",
    newAbout: "",
    answers: []
  };

  handleEmailCheck = this.handleEmailCheck.bind(this);
  handleAboutCheck = this.handleAboutCheck.bind(this);

componentDidMount(){

  console.log('userid: ' + localStorage.getItem('currentId'));
  if(localStorage.getItem('role') != ""){
    this.answerRepository.getUsersAnswers(localStorage.getItem('currentId'))
    .then(result => {
      this.setState({answers: result});
      console.log("ANSWERS");
      console.log(result);
      this.setState({showAns: true})
      this.setState({showQs: false});
    })
  }
  else {
    this.setState({showAns: false});
    this.setState({showQs: true});
  }

  let username = this.props.match.params.username;
  if(username){
    this.accountRepository.getAccount(username)
    .then(result => {
      this.setState({account: result});
    });
    
    this.questionRepository.getPost(username)
    .then(res =>{
      //console.log(res);
      this.setState({posts: res});
    })
  }

}


handleEmailCheck(){
  this.setState({editEmail: !this.state.editEmail});
}

handleAboutCheck(){
  this.setState({editAbout: !this.state.editAbout});
}


onEditEmail(email){
  console.log("Email Change Below")
  console.log(email);
  if(email.length >= 5){
    console.log("I ran")
    let username = this.props.match.params.username;
    this.accountRepository.updateEmail(username, email)
  }
  else{
    alert("Not a valid Email!")
  }
}

onEditAbout(about_me){
  if(about_me.length >= 5){
    let username = this.props.match.params.username;
    this.accountRepository.updateAbout(username, about_me)
    //
  }
  else{
    alert("About Me is too short!")
  }
}

onDeleteQuestion(post_id){
  if(window.confirm("Are you sure you want to delete this post?")){
    this.questionRepository.deletePost(post_id);
  }
}

onDeleteAnswer(ans_id){
  if(window.confirm("Are you sure you want to delete this answer to a question?")){
    this.answerRepository.deleteAnswer(ans_id);
  }
}

onDeleteAccount(username){
  if(window.confirm("Are you sure you want to delete your account?")){
    this.accountRepository.deleteUser(username);
    this.setState({redirect: '/login'})
  }
  else{
    console.log("Account not deleted.");
  }
}


  render() {
    // For editing your email
    const hiddenEmail = this.state.editEmail
    ? <div className="form-group" id="credBox">
         <label htmlFor="credInput1">New Email</label>
         <input 
             type="text"
             name="credInput1"
             id="credInput1"
             placeholder="email@mail.com"
             className="form-control"
             value={this.state.newEmail}
             onChange={e => this.setState({newEmail: e.target.value})}
         />
        <button
          type="button"
          className="btn btn-success btn-xs form-control mt-2"
          title="Edit"
          onClick={() => this.onEditEmail(this.state.newEmail)}
        >
        Submit Email Change
        </button>
     </div> 
     : null;

     // For editing About me section
     const hiddenAbout = this.state.editAbout
     ? <div className="form-group" id="credBox">
          <label htmlFor="credInput2">New About</label>
          <input 
              type="text"
              name="credInput2"
              id="credInput2"
              placeholder=""
              className="form-control"
              value={this.state.newAbout}
              onChange={e => this.setState({newAbout: e.target.value})}
          />
          <button
            type="button"
            className="btn btn-success btn-xs mt-2"
            title="Edit"
            onClick={() => this.onEditAbout(this.state.newAbout)}
          >
          Submit About Change
          </button>
      </div> 
      : null;

      // For showing list of answers on doctor's profile only
      const hiddenAnswers = this.state.showAns
      ? <ul className="list-group">
          <li className="list-group-item text-center">
            <p style={{ fontWeight: "bold" }}>My Answers</p>
          </li>
          {this.state.answers.map(answer => (
            <li className="list-group-item" key={answer.answer_id}>
              <div className="row">
                <div className="col-xs-10 col-md-11">
                  <div>
                    <h4>
                      {answer.answer}
                    </h4>
                </div>
                <p>{answer.date}</p>
                <Link to={'/answers/' + answer.post_id} >View Question</Link>
                  <button
                    type="button"
                    className="btn btn-danger"
                    title="RmvQ"
                    style={{float: 'right'}}
                    onClick={() => this.onDeleteAnswer(answer.answer_id)}
                  >
                    <span className="glyphicon glyphicon-pencil" />Remove
                </button>
            </div>
          </div>
        </li>            
        ))}
      </ul>
      : null;

      // For showing list of asked questions on user profile only
      const hiddenQuestions = this.state.showQs
      ? <ul className="list-group">
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
                  <p>{post.creation_date}</p>
                  <Link className="btn btn-link"  to={'../answers/' + post.post_id}>View Answer(s)</Link>
                  <button
                    type="button"
                    className="btn btn-danger"
                    title="RmvQ"
                    style={{float: 'right'}}
                    onClick={() => this.onDeleteQuestion(post.post_id)}
                  >
                    <span className="glyphicon glyphicon-pencil" />Remove
                </button>
              </div>
            </div>
          </li>                
        ))}
    </ul>
    : null;

    const hiddenCredentials = this.state.showAns
    ? 
      <ul className="list-group list-group-flush" style={{padding: '2em'}}>
        <li className="list-group-item">Credentials</li>
        <li className="list-group-item">{localStorage.getItem('role')}</li>
      </ul>
    : null;


      if(this.state.redirect) {
        return <Redirect to={this.state.redirect} />
      }
    return (
      <>     
      {/*Profile Part */}
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
                        <div className="form-check">
                        <label htmlFor="editA" className="form-check-label">Edit About</label>&nbsp;
                        <input 
                            type="checkbox"
                            id="editA"
                            name="editA"
                            checked={this.state.editAbout}
                            onChange={this.handleAboutCheck}
                        />
                    </div>
                    {hiddenAbout}
                      </div>
                      <ul className="list-group list-group-flush">
      <div className="container-fluid clearfix">
        <div className="container" style={{ width: "20vw", float: "left", paddingTop: "3em" }}>
          <ul className="list-group">
            <li className="list-group-item text-center">
              <h3>My Profile</h3>
            </li>
            {this.state.account.map(account => (
              // <li className="list-group-item" style={{ height: "80vh" }} key={account.usr_id}>
              <li className="list-group-item" key={account.usr_id}>
                <div className="card-body">
                  <h5 className="card-title">{account.username}</h5>
                  <p className="card-text">
                    {account.about_me}
                  </p>
                  <div className="form-check">
                    <label htmlFor="editA" className="form-check-label">Edit About</label>&nbsp;
                    <input 
                      type="checkbox"
                      id="editA"
                      name="editA"
                      checked={this.state.editAbout}
                      onChange={this.handleAboutCheck}
                    />
                  </div>
                  {hiddenAbout}
                </div>
                <ul className="list-group list-group-flush">
                        <li className="list-group-item">{account.email}</li>
                      </ul>
                      <div className="form-check">
                        <label htmlFor="editE" className="form-check-label">Edit Email</label>&nbsp;
                        <input 
                            type="checkbox"
                            id="editE"
                            name="editE"
                            checked={this.state.editEmail}
                            onChange={this.handleEmailCheck}
                        />
                    </div>
                    {hiddenEmail}
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                    {hiddenCredentials}
                    </li>
                    </ul>
                    <button
                        type="button"
                        className="btn btn-danger"
                        title="DeleteAcct"
                        style={{marginTop: '5em'}}
                        onClick={() => this.onDeleteAccount(account.username)}
                    >
                    <span className="glyphicon glyphicon-pencil" />Delete Account
                    </button>
                    </li>
                    ))}
                  </ul>
                </div>
                {/*Comments*/}
                <div className="container" style={{ width: "80vw", paddingTop: "3em" }}>
                      {hiddenQuestions}
                      {hiddenAnswers}
                </div>
              </div>   
                
      </>
    );
  }
}