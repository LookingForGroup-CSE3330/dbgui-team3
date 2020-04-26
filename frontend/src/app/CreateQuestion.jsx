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
        if(!this.state.tags.includes(this.state.tag)){
            this.setState({tags: [...this.state.tags, this.state.tag]});
        }
        else{
            alert("You already added that tag!")
        }
        console.log("Current tags listed below");
        console.log(this.state.tags);
    }

    onQuestionAdd(){
        var tempDate = new Date();
        var theDate = tempDate.getMonth() +1 + "/" + tempDate.getDate() + "/" + tempDate.getFullYear();

        if(this.state.question.length >= 10){
            let newquestion = new Question(2222, theDate, 0, 0, this.state.question);
            console.log("QUetion to be posted here")
            console.log(newquestion);
            this.questionRepository.postQuestion(newquestion);
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
                        <label htmlFor="thequestion">Question</label>
                        <textarea 
                        className="form-control" 
                        id="thequestion" 
                        rows="3"
                        value={this.state.question}
                        onChange={e => this.setState({question: e.target.value})}
                         />
                    </div>
                    <div className="form-group">
                        <label htmlFor="thetags">Tags</label>
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
                    onClick={() => this.onQuestionAdd()}
                    >Submit
                    </button>
                </ul>
             </div>
            </div>
        </>
        );
    }
}