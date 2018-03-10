import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../styles/main.css';

import Header from './Header';
import Landing from './Landing';
import ChuckJokes from './ChuckJokes';

class App extends Component {
  componentDidMount() {
    console.log('app fetchUser', this.props.fetchUser());
    this.props.fetchUser();
  }

  render() {
    console.log('APP', this.props);
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/searchjokes" component={ChuckJokes} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
