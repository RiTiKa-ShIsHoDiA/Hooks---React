import React, { Component } from 'react'

 class ClassuseEffect extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0,
            name : ""
        }
    }
    componentDidMount(){
        document.title = `clicked ${this.state.count}`;
    }
    log = (e) =>{ 
      console.log("chala event")
    }
    componentDidUpdate(prevProps,prevState){
     
     
      if(prevState.count !== this.state.count){
        console.log("update title");
         document.title = `clicked ${this.state.count}`;
      }
      window.addEventListener("mousemove",this.log);
    }
  
    componentWillUnmount(){
      console.log("unmount hua event");
      window.removeEventListener("mousemove",this.log);
    }
  render() {
    return (
      <div>
        <input type = "text" onChange = {(e)=>this.setState({name :e.target.value})}/>
         <button onClick={()=>this.setState({count:this.state.count + 1})}> Clicked {this.state.count} times</button>
      </div>
    )
  }
}
export default ClassuseEffect;
