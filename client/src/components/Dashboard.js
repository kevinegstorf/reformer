import React, { Component } from 'react';
import { connect } from 'react-redux';
import JokesList from './JokesList';

class Dashboard extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      active: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      active: !this.state.active
    });
  }
  render() {
    return (
      <div className="container">
        <button className="btn-add" onClick={this.handleClick}>
          Render Jokes
        </button>
        <ul>{this.state.active && <JokesList />}</ul>
      </div>
    );
  }
}

export default Dashboard;
