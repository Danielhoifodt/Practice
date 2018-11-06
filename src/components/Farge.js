import React, { Component } from 'react';

class Farge extends Component {
    constructor() {
        super();
        this.state = {
            color:"black"
        }
        this.change = this.change.bind(this);
    }
    change() {
        this.setState({color:"red"});
        if(this.state.color == "red"){
            this.setState({color:"black"});
        }
    }

    render() {
        
        

        return ( 
            <div>
            <h2 style={{color:this.state.color}}>Øvelse gjør mester</h2>
            <button onClick={this.change}>Skift farge</button>
            </div>
         );
    }
}
 
export default Farge;