import React from 'react';
import './Keypad.css';

const Keypad = ({found,display,displayScreen,operatorclick,operator,getAnswer,result}) => {
    console.log(displayScreen);
    return (
        <div>
        <div className="screen">
        <p> {displayScreen}</p>
        <p className="screen_op">{operator}</p>
        <p className="screen_result">{result}</p>
       </div>
       <div className="main">
       <div className="row1">
       <button onClick={display}value="7">7</button>
       <button  onClick={display} value="8">8</button>
       <button  onClick={display} value="9">9</button>
       <button   onClick={ 
            operatorclick
            
        }  id="operator" value="+">+</button>
       
       
   
       </div>
       <div className="row2">
       <button onClick={display}    value="4">4</button>
       <button onClick={display}  value="5">5</button>
       <button onClick={display}  value="6">6</button>
       <button   onClick={       operatorclick
         
    }  id="operator" value="-">-</button>
       
       
   
       </div>
       <div className="row1">
       <button onClick={display} value="1">1</button>
       <button  onClick={display} value="2">2</button>
       <button onClick={display} value="3">3</button>
       <button   onClick={ 
            operatorclick
             
        }   id="operator" className="mulitply"value="*">+</button>
       
       
   
       </div>
       <div className="row1">
       <button onClick={display}  value=".">.</button>
       <button onClick={display} value="0">0</button>
       <button onClick={getAnswer} value="=">=</button>
       <button   onClick={  
        operatorclick 
          } 
      id="operator" value="/"><i className="fas fa-divide"></i></button>
       
       
   
       </div>
       </div>
      
        </div>
    )
}

export default Keypad
