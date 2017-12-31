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

    input.simulate('change', { target: { value: '3' } });
    expect(wrapper.state().value).to.equal('3');

  });

  it('calls a callback when the submit button is clicked', () => {
    let clicked = false;
    const wrapper = shallow(<UserInput onClick={() => {clicked = true;}}/>);
    const form = wrapper.find('form');

    // a simulated click event with enzyme does not trigger form submission
    // https://github.com/airbnb/enzyme/issues/308
    form.simulate('submit', { preventDefault () {} });
    expect(clicked).to.be.true;

  });
});
