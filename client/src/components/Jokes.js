import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchJokes } from '../actions/index';

class Jokes extends Component {
  render() {
    let jokes = this.props.joke.jokes;
    return (
      <div>
        <ul className="jokelist">
          {jokes.map(function(joke) {
            return (
              <li className="joke" key={joke.id}>
                {joke.joke}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
function mapStateToProps({ joke }) {
  return { joke };
  console.log('mapStateToProps', joke);
}
export default connect(mapStateToProps, { fetchJokes })(Jokes);
