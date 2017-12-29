import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';
import {expect} from 'chai';

describe('Prime-Tables frontend', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
  });

  it('prints a hello world message', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.text()).to.equal('Hello, world');
  });
});
