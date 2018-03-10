import React, { Component } from 'react';
import SearchJokes from './SearchJokes';
import JokeList from './JokeList';

class ChuckJokes extends Component {
  render() {
    return (
      <div>
        <h2>Chuck Jokes</h2>
        <SearchJokes />
        <JokeList />
      </div>
    );
  }
}

export default ChuckJokes;
