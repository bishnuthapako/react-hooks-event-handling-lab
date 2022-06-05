// Code EyesOnMe Component Here
import react from 'react';
import React from 'react';
import ReactDOM from 'react-dom';

// function EyesOnMe(){
   
//     return <button onFocus={()=>{console.log("Good!")} }>Eyes on me</button>

// }



class EyesOnMe extends react.Component{
    onBlur = ()=>{console.log("Hey! Eyes on me!")}
    onFocus = ()=>{console.log('Good!')}
    

    render(){
        return (<button onFocus={this.onFocus} onBlur={this.onBlur}>Eyes on me</button>)
    }
}

export default EyesOnMe;
