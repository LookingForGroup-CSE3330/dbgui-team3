import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {ROUTES} from './routes.js';
import {Header} from './app/Header';




class App extends React.Component {
  
  state = {}


  render(){
    return(
      <>
      <Router>
        <Header />
        <Switch>
          { ROUTES.map((route, index) => <Route key={index} {...route} />)}
        </Switch>
      </Router>
      </>
    )
  }
}
export default App;

/*
import React from 'react';
import './App.css';
import axios from 'axios';
import {Login} from './app/Login';
import {HomePage} from './app/HomePage';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      number: "",
      values: []
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handle input field state change
  handleChange = (e) => {
    this.setState({number: e.target.value})
  }

  // handle input form submission to backend via POST request
  handleSubmit = (e) => {
    e.preventDefault();
    let prod = this.state.number * this.state.number;
    axios.post('http://localhost:8000/multplynumber', {product: prod}).then(res => {
      console.log(res);
      this.fetchVals();
    });
    this.setState({number: ""});
  }

  // handle intialization and setup of database table, can reinitialize to wipe db
  reset = () => {
    axios.post('http://localhost:8000/reset').then(res => {
      console.log(res);
      this.fetchVals();
    });
  }

  // tell app to fetch values from db on first load (if initialized)
  componentDidMount(){
    this.fetchVals();
  }

  // fetches vals of db via GET request
  fetchVals = () => {
    axios.get('http://localhost:8000/values').then(
      res => {
        const values = res.data;
        console.log(values.data);
        this.setState({ values: values.data });
    });
  }


  render(){
    return (
      <>
        <HomePage/>
      </>
    );
  }


}

export default App;
*/
