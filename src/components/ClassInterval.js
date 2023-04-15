import React, { Component } from 'react'

 class ClassInterval extends Component {
    constructor(props){
        super(props);
    console.log("constructor");
        this.state = {
            count:0
        }
    }
   componentDidMount(){
    console.log("update");
      this.interval = setInterval(this.tick,1000);
   }
   tick = ()=>{
    console.log("tick");
    this.setState({count:this.state.count + 1});
   }
   componentWillUnmount(){
    console.log("unmount");

    clearInterval(this.interval);
   }
  render() {
    console.log("render");
    return (
      <div>
        <h1>{this.state.count}</h1>
      </div>
    )
  }
}

export default ClassInterval;
