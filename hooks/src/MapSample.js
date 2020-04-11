import React from 'react';
//import BasicTextFields from './BasicTextField';
//import Count from './CountSample';
//import Button from '@material-ui/core/Button';
//import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      data : [
              {id:"UserName",label:"UserName",type:"text"},
              {id:"Password",label:"Password",type:"password"}
             ]
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
            { this.state.data.map(e=>
                <Grid item xs={12}>
                    <Grid item xs={6} container direction="row" justify="center">
                     <TextField id={e.id} label={e.label} type={e.type}> </TextField>
                    </Grid>
                </Grid> 
            )}
            <br/>
           
         </div> 
         );
    }
}

export default App;