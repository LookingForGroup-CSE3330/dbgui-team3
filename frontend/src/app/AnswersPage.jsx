import React from 'react';
import {AnswerRepository} from './../api/answerRepository';
import { QuestionRepository } from '../api/questionRepository';

export class AnswerPage extends React.Component {
    questionRepository = new QuestionRepository();
    answerRepository = new AnswerRepository();

    state = {
        question: "",
        answers: []
    }

    componentDidMount() {
        let post_id = this.props.match.params.post_id;
        if(post_id){
            this.answerRepository.getAnswerForQuestion(post_id)
            .then(result => {
                console.log(result);
                this.setState({answers: result});
            })
        }
    }

    render() {
        return (
            <>
             <div
                  className="container"
                  style={{ width: "80vw", paddingTop: "3em" }}
                >
                  <ul className="list-group">
                    <li className="list-group-item text-center">
                      <p style={{ fontWeight: "bold" }}>Answers</p>
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
                          <p>{answer.date}</p>
                        </div>
                      </div>
                    </li>                
                    ))}
  
                  </ul>
                </div>
            </>
        )
    }
}