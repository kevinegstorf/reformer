import React, { Component } from 'react';
import { connect } from 'react-redux';
import { favoriteJoke } from '../actions';

class JokeItem extends Component {
  constructor() {
    super();

    this.state = {
      favorited: false
    };
  }

  favorite(joke) {
    this.props.favoriteJoke(joke);
    this.setState({ favorited: true });
  }

  render() {
    let { joke } = this.props;
    console.log('JokeItem', joke);

    return (
      <div className="joke-item">
        {this.props.favoriteButton ? (
          this.state.favorited ? (
            <div className="star">&#9733;</div>
          ) : (
            <div className="star" onClick={() => this.favorite(joke)}>
              &#9734;
            </div>
          )
        ) : (
          <div />
        )}
        <div className="recipe-text">
          <a>
            <h4>{joke.joke}</h4>
          </a>
        </div>
      </div>
    );
  }
}

export default connect(null, { favoriteJoke })(JokeItem);
