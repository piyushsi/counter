import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component{
constructor(){
  super()
  this.state={
    counter:0
  }
}
  render() {
    return (<div>
     <h1>{this.state.counter}</h1>
     <button className='btn11' onClick=  { ()=> this.setState({counter: this.state.counter +1})}>Inc</button>
     <button className='btn11' onClick=  { ()=> this.setState({counter: this.state.counter -1})}>Dec</button> 
     <button className='btn11' onClick=  { ()=> this.setState({counter: this.state.counter =0})}>Reset</button>  
    </div>)
  }
}



export default App;
