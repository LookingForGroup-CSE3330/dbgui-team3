import React from "react";
import { QuestionRepository } from "../api/questionRepository";
import Answer from "./../models/answer";
import { AnswerRepository } from "../api/answerRepository";
import {Navigation} from 'react-router';


export class AnswerQuestion extends React.Component {

    questionRepository = new QuestionRepository();
    answerRepositroy = new AnswerRepository();

    state = {
        question: [],
        answer: "",
        date: ""
    };

    componentDidMount(){
        let post_id = this.props.match.params.post_id;
        if(post_id){
            this.questionRepository.getPostByPostId(post_id)
            .then(res => {
                console.log(res); 
                this.setState({question: res});
            })
        }
    }


    onAnswerAdd(){
        if(!localStorage.getItem('role')){
            alert("Sorry, only Doctors can answers questions!")
        }
        else{
            var tempDate = new Date();
            var theDate = tempDate.getMonth() +1 + "/" + tempDate.getDate() + "/" + tempDate.getFullYear();
            var post_id = this.props.match.params.post_id;

            if(this.state.answer.length >= 10){
                let newanswer = new Answer(post_id, 7777, theDate, this.state.answer) //NEED TO ADD user_id (this is the id of the person,doc, answering the question) after post_id parameter
                console.log("answer to be posted here")
                console.log(newanswer);
                this.answerRepositroy.postAnswer(newanswer, post_id);
            }
        }
    }

    render() {
        return (
        <>
            <div className="container">
             <div className="container" style={{ width: "99vw", paddingTop: "3em" }} >
             <ul className="list-group-flush">
                {this.state.question.map(q => (
                <li className="list-group-item" style={{fontWeight: 'bold', fontSize: '2em'}} key={q.post_id}>{q.question}</li>
                ))}
                </ul>
                <ul className="list-group">

                    <div className="form-group">
                        <label htmlFor="theanswer">Answer</label>
                        <textarea 
                        className="form-control" 
                        id="theanswer" 
                        rows="3"
                        value={this.state.answer}
                        onChange={e => this.setState({answer: e.target.value})}
                         />
                    </div>
                    <button
                    type="button"
                    className="btn btn-success mb-2"
                    onClick={() => this.onAnswerAdd()}
                    >Submit
                    </button>
                </ul>
             </div>
            </div>
        </>
        );
    }
}