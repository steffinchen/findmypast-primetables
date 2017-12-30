import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import MultiplicationTableUI from './MultiplicationTableUI';
import UserInput from './UserInput';

describe('Prime-Tables frontend', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
  });

  it('prints a title', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('h1').text()).to.equal('Findmypast Prime Tables');
  });

  xit('has an input field', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(UserInput)).to.have.length(1);
  });

  it('displays the multiplication table', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(MultiplicationTableUI)).to.have.length(1);
  });

  it('passes the user input to multiplication table', () => {
    const wrapper = shallow(<App/>);
    const input = wrapper.find('input');
    const okButton = wrapper.find('button');

    input.simulate('change', { target: { value: '3' } })
    okButton.simulate('click');
    expect(wrapper.find(MultiplicationTableUI).prop('n')).to.equal(3);

  });
});
