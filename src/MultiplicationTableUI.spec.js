import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import MultiplicationTableUI from './MultiplicationTableUI';

describe('Multiplication Table', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MultiplicationTableUI/>, div);
  });

  it('takes an input N and displays an N+1 x N+1 table', () =>{
    const wrapper = shallow(<MultiplicationTableUI n="3"/>);
    expect(wrapper.find('tr')).to.equal(4); // 4 rows
    expect(wrapper.find('th')).to.equal(4); // 4 header cells
    expect(wrapper.find('td')).to.equal(12); // 3 rows * 4 cells each -> 12 cells
  });

  it('displays prime numbers as row headers', () =>{
    const wrapper = shallow(<MultiplicationTableUI n="3"/>);
    expect(wrapper.find('thead').html()).to.equal('<th></th><th>2</th><th>3</th><th>5</th>');
  });
});
