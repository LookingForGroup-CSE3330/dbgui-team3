import React from "react";
import {QuestionRepository} from './../api/questionRepository';
import {Link} from 'react-router-dom';
import { AccountRepository } from "../api/accountRepository";


export class HomePage extends React.Component {
  state = {
    posts: [],
    username: ""
  };

  questionRepository = new QuestionRepository();
  accountRepository = new AccountRepository();
  
  componentDidMount(){
    this.questionRepository.getPosts()
    .then(posts => {
      console.log("POSTS");
      console.log(posts);
      this.setState({posts});
    });
    
  }

  onUpvote(post_id){
    this.questionRepository.addUpvote(post_id);
    window.location.reload(true);
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
                <p style={{ fontWeight: "bold", fontSize: '2em'}}>Site Questions</p>
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
                          onClick={() => this.onUpvote(post.post_id)}
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
        </div>
      </>
    );
  }
}