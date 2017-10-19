import React, { Component } from 'react';
import { Form, FormGroup, ListGroup, ListGroupItem, FormControl, Button} from 'react-bootstrap';
import Name from './Name';
import Address from './Address';
import Hobbies from './Hobbies';

class App extends Component {
    constructor() {
        super();

        this.state = {
            text:'',
            names: [],
            address: [],
            hobbies:[]
        }
    }

    submitName() {
        const { names, text } = this.state;
        
        names.push({ text });

        this.setState({ names });
    }

    submitAddress() {
        const { address, text } = this.state;
        
        address.push({ text });

        this.setState({ address });
    }

    submitHobbies() {
        const { hobbies, text } = this.state;
        
        hobbies.push({ text });

        this.setState({ hobbies });
    }

    render() {
        return (
            <div class="container">
                <h2>Sports Magazine</h2>
                <h3>Sports Magazine Setting</h3>
                <div id="nameContainer">
                    <h4>Name</h4>
                    <Form inline>
                        <FormControl
                        placeholder="Enter Name" 
                        onChange={event => this.setState({ text: event.target.value }) } />
                        {' '}
                        <Button bsStyle="primary" onClick={() => this.submitName()}>Submit</Button>
                    </Form>
                    {
                        this.state.names.map((name,index)=>{
                            return (
                                <Name key={index} name={name}/>
                            )
                        })
                    }
                </div>
                <div id="addressContainer">
                <h4>Address</h4>
                <Form inline>
                    <FormControl
                        tyep="text"
                        value={this.state.value}
                        placeholder="Enter Address"
                        onChange={event => this.setState({ text: event.target.value }) } />
                    {' '}

                    <Button bsStyle="primary" onClick={() => this.submitAddress()}>Submit</Button>
                </Form>
                {
                    this.state.address.map((address,index)=>{
                        return (
                            <Address key={index} address={address}/>
                        )
                    })
                }
                </div>
                <div id="hobbiesContainer">
                <h4>Hoobies</h4>
                <Form inline>
                    <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="Enter Hobbies"
                        onChange={event => this.setState({ text: event.target.value }) } />
                        {' '}
                        <Button bsStyle="primary" onClick={() => this.submitHobbies()}>Submit</Button>
                </Form>
                <div id="textbox">
                {
                    this.state.hobbies.map((hobbies,index)=>{
                        return (
                            <ListGroup>
                                <ListGroupItem>
                                    <Hobbies key={index} hobbies={hobbies}/>
                                </ListGroupItem>
                            </ListGroup>
                        )
                    })
                }
                </div>
                </div>
            </div>
        )
    }
}

export default App;