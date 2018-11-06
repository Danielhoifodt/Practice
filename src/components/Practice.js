import React, { Component } from 'react';

class Practice extends Component {
    constructor() {
        super();

        this.click = this.click.bind(this);
        this.state = {
            greeting : "Hello"
        }
    }

    click(e) {
        this.setState({
        greeting: 'Hello World!'
        });
        }

  render() {
    return (
      <div>
       <p>{this.state.greeting}</p>
        <button onClick={this.click}>Click me</button>
      </div>
    );
  }
}

export default Practice;