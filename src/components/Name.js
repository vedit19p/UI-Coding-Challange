import React, { Component } from 'react';

class Name extends Component {
   render() {
       return (
           <div>
               <p>{this.props.name.text}</p>
           </div>
       )
   }
}

export default Name;