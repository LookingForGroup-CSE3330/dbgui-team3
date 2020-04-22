import React from "react";

export class CreateQuestion extends React.Component {
    state = {
        Question: "",
        Date: "",
        Tags: []
    };

    componentDidMount(){
        
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
                        <textarea className="form-control" id="thequestion" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="thetags">Tags</label>
                        <input className="form-control" id="thetags"></input>
                    </div>
                </ul>
             </div>
            </div>
        </>
        );
    }
}