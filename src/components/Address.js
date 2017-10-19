import React, { Component } from 'react';

class Address extends Component {
   render() {
       return (
           <div>
               <p>{this.props.address.text}</p>
           </div>
       )
   }
}

export default Address;