import React, { Component } from 'react'

class ClassCounterTwo extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
    }
    handleClick(){
        for (let index = 0; index < 5; index++) {
            this.setState((prev)=>{
                return {count:prev.count + 1};
            });
            console.log(this.state.count);
            console.log("updation done");
        }
       
    }
  render() {
    return (
      <>
         <button onClick = {this.handleClick.bind(this)}>+5</button>
         <p>Count is {this.state.count}</p>
         
     </>
    )
  }
}

export default ClassCounterTwo;
