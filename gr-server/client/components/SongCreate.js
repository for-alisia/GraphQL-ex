import React, { Component } from 'react';
import gql from 'graphql-tag';

class SongCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h5>Create a New Song</h5>
        <hr />
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title:</label>
          <input
            type="text"
            value={this.state.title}
            onChange={(event) => this.setState({ title: event.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default SongCreate;
