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

    componentDidMount() {
        let post_id = this.props.match.params.post_id;
        if(post_id){
            this.answerRepository.getAnswerForQuestion(post_id)
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
                    <p style={{ fontWeight: "bold" }}>Answers({this.state.answers.length})</p>
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