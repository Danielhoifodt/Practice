import React, { Component } from 'react';

class Hilsen extends Component {
    constructor () {
        super();
        this.state = {
            hilsen : "hei"
        }
        this.change =this.change.bind(this);
        this.changeAgain = this.changeAgain.bind(this);

    }

    change() {
        this.setState({hilsen: "hei, igjen!"});
        
    }
    changeAgain() {
        this.setState({hilsen: "jaggu, er du ikke her fortsatt a"});
    }


  render() {
    return (
      <div>
          {this.state.hilsen}
          <br />
          <button onClick={this.change}>Hils</button>
          <button onClick={this.changeAgain}>Hils igjen</button>
       
      </div>
    );
  }
}

export default Hilsen;