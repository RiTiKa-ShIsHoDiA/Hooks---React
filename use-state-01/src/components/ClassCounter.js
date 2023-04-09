import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
    }
    handleClick(){
        this.setState({
            count:this.state.count+1
        })
    }
  render() {
    return (
      <>
         <button onClick = {this.handleClick.bind(this)}>+1</button>
         <p>Count is {this.state.count}</p>
     </>
    )
  }
}

export default ClassCounter;
