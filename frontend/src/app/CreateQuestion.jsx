import React from "react";
import { QuestionRepository } from "../api/questionRepository";
import Question from "./../models/question";


export class CreateQuestion extends React.Component {

    questionRepository = new QuestionRepository();

    state = {
        question: "",
        date: "",
        tag: "",
        tags: []
    };

    componentDidMount(){
        
    }

    onTagAdd(){

    }


    onQuestionAdd(){
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var tempDate = new Date();
        var theDate = months[tempDate.getMonth() +1] + " " + tempDate.getDate() + ", " + tempDate.getFullYear();
        this.setState({date: theDate});

        if(this.state.question.length >= 10){
            let newquestion = new Question();
        }

    }

    render() {
        return (
        <>
            <div className="container">
             <div className="container" style={{ width: "99vw", paddingTop: "3em" }} >
                <ul className="list-group">
                    <li className="list-group-item text-center">
                        <h3 style={{ fontWeight: "bold" }}>Your Question</h3>
                    </li>
                    <div className="form-group">
                        <label for="thequestion">Question</label>
                        <textarea 
                        className="form-control" 
                        id="thequestion" 
                        rows="3"
                        value={this.state.question}
                        onChange={e => this.setState({question: e.target.value})}
                         />
                    </div>
                    <div className="form-group">
                        <label for="thetags">Tags</label>
                        <input className="form-control" id="thetags" value={this.state.tag} onChange={e =>this.setState({tag: e.target.value})}></input>
                        <button
                        type="button"
                        className="btn btn-secondary mb-2"
                        onClick={() => this.onTagAdd()}
                        style={{margin: '1em'}}
                        >Add Tag
                        </button>
                    </div>
                    <button
                    type="button"
                    className="btn btn-success mb-2"
                    onClick={() => this.onTagAdd()}
                    >Submit
                    </button>
                </ul>
             </div>
            </div>
        </>
        );
    }
}