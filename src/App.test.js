import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow, mount} from 'enzyme';
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

  it('has an input field', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(UserInput)).to.have.length(1);
  });

  it('displays the multiplication table', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(MultiplicationTableUI)).to.have.length(1);
  });

  it('passes the user input to multiplication table', () => {
    const wrapper = mount(<App/>);
    const input = wrapper.find('input');
    const form = wrapper.find('form');

    input.simulate('change', { target: { value: '3' } });
    form.simulate('submit', { preventDefault () {} });
    expect(wrapper.find(MultiplicationTableUI).prop('n')).to.equal(3);

  });
});
