import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields(props) {
  const classes = useStyles();

  return (
   //<form className={classes.root} noValidate autoComplete="off">
   <Container className={classes.root}>
        <TextField 
          id={props.id} 
          label={props.label} 
          defaultValue={props.defaultValue} 
          type={props.type} 
          autoComplete={props.autoComplete}
          disabled={props.disabled}
          
        />
   </Container>
   //</form>

    
  );
}