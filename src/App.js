/*eslint-disable*/
import React,{useEffect, useState} from 'react';
import Keypad from './Keypad.js' 
import './App.css';
 const App=() => {
 const [displayScreen,setDisplayScreen] =useState("");
 const [operator,setOperator]=useState("");
 const [click,setClick]=useState(false);
 
 const [found,setFound]=useState(false);
 const [a,setA]=useState("");
 const [result,setResult]=useState(0);
 const [b,setB]=useState("")

 const getAnswer=()=>{
   setFound(true);
   
   
    switch(operator)
    {
      case '+':
        setResult(a+b);
        break;
        case '-':
        setResult(a-b);
        break;
         case '*':
        setResult(a*b);
        break;
        case '/':
        setResult(a/b);
        break;
        default:
          ;
    }
   
     
  
 }
  
  const display=(e)=>{
 if(found==true)
 setA(result);
   setDisplayScreen(displayScreen+e.target.value);
   console.log('ba');
   
   if(click==false)

   setA(parseFloat( displayScreen+e.target.value) );
   
   if(click==true)
   setB(parseFloat( displayScreen+e.target.value) );
   console.log(displayScreen);
  }
  
  
 const operatorclick =(e)=>{
 
setDisplayScreen(" ");

 setOperator(e.target.value);
setClick(true);
 
 
 }
  
 
  return (
    <>
     
    <div className="App">
   <Keypad found={found} display={display} operator={operator}displayScreen={displayScreen} operatorclick={operatorclick} result={result} getAnswer={getAnswer}/>

    </div>
 
    </>
  );
  } 

export default App;
