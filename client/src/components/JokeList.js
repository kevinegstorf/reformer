import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import JokeItem from './JokeItem';

class JokeList extends Component {
  render() {
    console.log('this.props JOKELIST', this.props);

    return (
      <div>
        {this.props.favoriteJokes.length > 0 ? (
          <h4 className="link">
            <Link to="/favorites">Favorites</Link>
          </h4>
        ) : (
          <div />
        )}
        {this.props.jokes.map((joke, index) => {
          return <JokeItem key={index} joke={joke} favoriteButton={true} />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(JokeList);
