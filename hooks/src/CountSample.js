import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import Joke from './Joke';
//import jokesData from "./jokesData";
class Count extends React.Component {
  constructor() {
    super()
    this.state={
      count : 0,
      height :140
    }
    this.countClicks = this.countClicks.bind(this);
  }

  countClicks() {
      this.setState(prev =>{
        console.log(prev)
      return{
         count : prev.count + 1
      }
    })
  }
 /* const jokesComponent = jokesData.map(joke => 
  <Joke key={joke.id} 
    joke={joke}
    question={joke.question} 
    punchLine={joke.punchLine}
    src={joke.src} 
  >)*/
  render(){
    const alignCenter = {
      textAlign :'center',
      color : 'red'
    }
    
    return (
     <div style={alignCenter}>
        <h1 >{this.state.count}</h1>
        <button onClick={this.countClicks}>Change!</button>
     </div>
     /* <div>
        {jokesComponent}
      </div>
      */
      /*
      <div>
        <Joke question="Aama un pearu enna?" punchLine="serupu" />
        <Joke question="enna da karupargal maanada?" punchLine="dey anna sevapu da.. sevapu satta potu irukaru paaru"/>
        <Joke question="Anna vazhukaya oru elani vettunga" punchLine="edhuku meala vazhukana unna dhan pudichu vettanum"/>
        <Joke question="enna valikudha?" punchLine="illa enna teachi kulikudhu"/>
        <Joke question="yarra ni?" punchLine="poramboku"/>
      </div>*/
    )
  }
  
}

export default Count;
