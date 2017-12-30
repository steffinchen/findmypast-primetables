import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import UserInput from './UserInput';

describe('User input component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UserInput/>, div);
  });

  it('has a state of the user input', () => {
    const wrapper = shallow(<UserInput/>);
    const input = wrapper.find('input');
    const okButton = wrapper.find('button');

    input.simulate('change', { target: { value: '3' } })
    okButton.simulate('click');
    expect(wrapper.state().input).to.equal(3);

  });
});
