import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Landing from './components/Landing';
import SurveyNew from './components/SurveyNew';
import { fetchUser } from './actions';



class App extends Component {
  state = {  }
  componentDidMount() {
    this.props.fetchUser()
  }
  render() {
    return (
      <div className="container">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={ Landing } />
            <Route path="/surveys" exact component={ Dashboard } />
            <Route path="/surveys/new" exact component={ SurveyNew } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect(undefined, { fetchUser })(App);