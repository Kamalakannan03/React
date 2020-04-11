import React from 'react';
import axios from 'axios';
//import logo from './logo.svg';
//import './App.css';
axios.defaults.baseURL= 'https://jsonplaceholder.typicode.com';
//class App extends React.Component {

  state = {
    name: 'React',
    records : []
  }
  get=()=>{
    axios.post('/posts')
      .then(res => {
       
       // console.log(res);
       
        console.log(res.data.id);
        this.addPet.bind(this)
        this.setState({records:res.data})
        //console.log({this.state.records})
      })
  }
 
render(){
  return (
    <div>
      <button onClick={this.get}>Get</button>
      <button>Post</button>
      {this.records && this.records.map(x => <div>{x.id}</div>)}
    </div>
  );
}


//export default App;
