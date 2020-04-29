import React from "react";
import {QuestionRepository} from './../api/questionRepository';
import {Link} from 'react-router-dom';
import { AccountRepository } from "../api/accountRepository";


export class HomePage extends React.Component {
  state = {
    posts: [],
    username: "",
  };

  handleDateSort = this.handleDateSort.bind(this);
  handleVoteSort = this.handleVoteSort.bind(this);

  questionRepository = new QuestionRepository();
  accountRepository = new AccountRepository();
  
  componentDidMount(){
    this.questionRepository.getPostsSortedDate()
    .then(posts => {
      console.log("POSTS");
      console.log(posts);
      this.setState({posts});
    });
    
  }

  handleDateSort(){
    this.questionRepository.getPostsSortedDate()
    .then(posts => {
      console.log("POSTS");
      console.log(posts);
      this.setState({posts});
    });
  }

  handleVoteSort(){
    this.questionRepository.getPostsSortedVotes()
    .then(posts => {
      console.log("POSTS");
      console.log(posts);
      this.setState({posts});
    });
  }

  onUpvote(post_id, user_id_post){
    if(localStorage.getItem('loggedin') == "yes"){
      if(localStorage.getItem('currentId') != user_id_post){
        this.questionRepository.addUpvote(post_id);
        window.location.reload(true);
      }
    }
  }

  render() {
    return (
    <>
      <div className="container-fluid" style={{ width: "99vw", paddingTop: "3em" }}>
        <ul className="list-group">
          <li className="list-group-item text-center">
            <p style={{ fontWeight: "bold", fontSize: '2em'}}>Site Questions</p>
            <div className="dropdown clearfix">
              <button
                className="btn btn-secondary dropdown-toggle float-right"
                type="button"
                id="sortDropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
              >
                Sort By
              </button>
              <div className="dropdown-menu" aria-labelledby="sortDropdowMenuButton">
                <button 
                  className="dropdown-item" 
                  type="button"
                  onClick={() => this.handleDateSort()}
                >
                  Recent
                </button>
                <button 
                  className="dropdown-item" 
                  type="button"
                  onClick={() => this.handleVoteSort()}
                >
                  Vote Count
                </button>
              </div>
            </div>
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
                  <div className="action">
                    <button
                      type="button"
                      className="btn btn-success btn-xs"
                      title="Edit"
                      onClick={() => this.onUpvote(post.post_id, post.user_id)}
                    >
                      {post.up_votes}
                    </button>
                  </div>
                  <Link className="btn btn-link"  to={'answers/' + post.post_id}>View Answer(s)</Link>
                </div>
              </div>
            </li>                
          ))}
        </ul>
      </div>
    </>);
  }
}