import React, { Component } from 'react';

class Hobbies extends Component {
   render() {
       return (
           <div>
               <p>{this.props.hobbies.text}</p>
           </div>
       )
   }
}

export default Hobbies;