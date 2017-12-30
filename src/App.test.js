import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import MultiplicationTableUI from './MultiplicationTableUI';

describe('Prime-Tables frontend', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
  });

  it('prints a title', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('h1').text()).to.equal('Findmypast Prime Tables');
  });

  it('has an input field', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('input')).to.have.length(1);
  });

  it('displays the multiplication table', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(MultiplicationTableUI)).to.have.length(1);
  });

  it('has a state of the user input', () => {
    const wrapper = shallow(<App/>);
    const input = wrapper.find('input');
    const okButton = wrapper.find('button');

    input.simulate('change', { target: { value: '3' } })
    okButton.simulate('click');
    expect(wrapper.state().n).to.equal(3);

  });
});
