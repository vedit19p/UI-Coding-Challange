import React from 'react';
import { mount } from 'enzyme';
import Name from './Name';

const props = { name:{ text: 'test name' } }

describe('Name', () => {
    let name = mount(<Name name={...props}/>);

    it('renders the name text', () => {
        console.log(note.debug());
        expect(name.find('p').text()).toEqual('props.note.text');
    });
});