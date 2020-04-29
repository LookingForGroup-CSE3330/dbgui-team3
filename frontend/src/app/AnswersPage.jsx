import React from 'react';
import {AnswerRepository} from './../api/answerRepository';
import { QuestionRepository } from '../api/questionRepository';
import {Link} from 'react-router-dom';

export class AnswerPage extends React.Component {
    questionRepository = new QuestionRepository();
    answerRepository = new AnswerRepository();

    state = {
        question: [],
        answers: []
    }

    handleDateSort = this.handleDateSort.bind(this);
    handleVoteSort = this.handleVoteSort.bind(this);

    componentDidMount() {
        let post_id = this.props.match.params.post_id;
        if(post_id){
            this.answerRepository.getAnswersForQuestionSortedDate(post_id)
            .then(result => {
                console.log(result);
                this.setState({answers: result});
            })

            this.questionRepository.getPostByPostId(post_id)
            .then(res => {
                console.log(res); 
                this.setState({question: res});
            })
        }
    }

    handleDateSort(){
      let post_id = this.props.match.params.post_id;
      this.answerRepository.getAnswersForQuestionSortedDate(post_id)
      .then(answers => {
        console.log("answers date")
        console.log(answers)
        this.setState({answers});
      });
    }
  
    handleVoteSort(){
      let post_id = this.props.match.params.post_id;
      this.answerRepository.getAnswersForQuestionSortedVote(post_id)
      .then(answers => {
        console.log("answers vote")
        console.log(answers);
        this.setState({answers});
      });
    }

    render() {
        return (
            <>
             <div
                  className="container"
                  style={{ width: "80vw", paddingTop: "3em" }}
                >
                  <ul className="list-group-flush">
                    {this.state.question.map(q => (
                      <li className="list-group-item" style={{fontWeight: 'bold', fontSize: '2em'}} key={q.post_id}>{q.question}</li>
                    ))}
                  </ul>
                  <ul className="list-group-flush">
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col">
                          <p style={{ fontWeight: "bold" }}>Answers({this.state.answers.length})</p>
                        </div>
                        <div className="col clearfix">
                          <div className="dropdown float-right">
                            <button
                              className="btn btn-secondary dropdown-toggle"
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
                        </div>
                      </div> 
                    </li>
                    {this.state.answers.map(answer => (
                    <li className="list-group-item" key={answer.answer_id}>
                      <div className="row">
                        <div className="col-xs-10 col-md-11">
                          <div>
                            <p>
                              {answer.answer}
                            </p>
                          </div>
                          <div className="action">
                          </div>
                          <p>{answer.date}</p>
                        </div>
                      </div>
                    </li>                
                    ))}
                    {this.state.question.map(q => (
                    <li className="list-group-item " key={q.post_id}>
                      <Link className="btn btn-link"  to={'new/' + q.post_id}>Answer This Question</Link>
                    </li>
                    ))}
  
                  </ul>
                </div>
            </>
        )
    }
}