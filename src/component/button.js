import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { upCounter: 10, downCounter: 10 };
  }
  userDidUpVote = () => {
    const counter = this.state.upCounter;
    if (counter <= 20) {
      this.setState({ upCounter: counter + 1 });
    } else {
      this.reset();
    }
  };
  userDidDownVote = () => {
    const counter = this.state.downCounter;
    if (!counter == 0) {
      this.setState({ downCounter: counter - 1 });
    } else {
      this.reset();
    }
  };
  reset() {
    this.setState({ upCounter: 10, downCounter: 10 });
  }
  render() {
    let upCounter = this.state.upCounter;
    let downCounter = this.state.downCounter;
    return (
      <div>
        <h1>Vote Buttons</h1>
        <button onClick={this.userDidDownVote}>{downCounter} Downvote</button>
        <button onClick={this.userDidUpVote}>{upCounter}Upvote</button>
      </div>
    );
  }
}

export default Button;
