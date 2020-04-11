import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import store,{COUNTER_INCREMENT,COUNTER_DECREMENT} from './store';

class App extends Component {
  constructor(){
    super();
    this.state={
      name:''
    };
  }

  increment =()=>{
    store.dispatch({type:COUNTER_INCREMENT});
    console.log(store.getState().count);
  }

  decrement =()=>{
    store.dispatch({type:COUNTER_DECREMENT});
    console.log(store.getState().count);
  }
  render() {
    return (
      <div>
        
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
