import React from 'react';
//import BasicTextFields from './BasicTextField';
//import Count from './CountSample';
//import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class demo extends React.Component {
  constructor(){
    super();
    this.state={
      value : "test"
    }
  }
  clickMe(e){
    alert(e)
  }
 
  setTitle(e){
      this.setState({value:e})
  }
  render(){
      return (
        
        <div>
          <TextField id="Sample_Field" onChange={event => {this.setTitle(event.target.value)}}  label="Type Here!!"> </TextField>
          <p>{this.state.value}</p>

        </div>
        );
    }
}

export default demo;