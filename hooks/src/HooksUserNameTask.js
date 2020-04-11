import React, { useState } from 'react';
//import BasicTextFields from './BasicTextField';
//import Count from './CountSample';
//import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function App(){

    const sample=(e)=>{
        alert(e)
    }
    const [value,setValue] = useState("");
        return (
            <div>
            <TextField id="Sample_Field" onChange={e=>sample(e)} label="Type Here!!"> </TextField>
            <p>{value}</p>
            </div>
        );
}

export default App;