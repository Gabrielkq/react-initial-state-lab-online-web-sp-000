// your Bomb code here!
import React, {Component} from 'react';

export default class Bomb extends Component{
    
 state = {
    secondsLeft: this.props.initialCount
 }


    render(){

       
       if (this.state.secondsLeft === 0){
           return    <div>
           <p>
              Boom!
           </p>
       </div>   
       }else{
        return(

         <div>
             <p>
                 {this.state.secondsLeft} seconds left before I go boom!
             </p>
         </div>   
        )
    }}
}