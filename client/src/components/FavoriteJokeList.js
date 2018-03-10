import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class favoriteJokeList extends Component {
  render() {
    console.log('testing favorites', this.props.favoriteJokes);
    return (
      <div>
        <h4 className="link">
          <Link to="/">Home</Link>
        </h4>
        <h4>Favorite Jokes:</h4>
        {this.props.favoriteJokes.map((id, index) => {
          return <div key={index}>{id.joke}</div>;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favoriteJokes: state.favoriteJokes
  };
}

export default connect(mapStateToProps, null)(favoriteJokeList);
