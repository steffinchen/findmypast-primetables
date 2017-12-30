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
    expect(wrapper.find('tr')).to.have.length(4, 'tr'); // 4 rows
    expect(wrapper.find('thead > tr > th')).to.have.length(4, 'thead > tr > th'); // 4 header cells
    expect(wrapper.find('tbody > tr > th')).to.have.length(3, 'tbody > tr > th');  // first col of each row is header
    expect(wrapper.find('td')).to.have.length(9, 'td'); // non-header cells
  });

  it('displays prime numbers as row headers', () =>{
    const wrapper = shallow(<MultiplicationTableUI n="3"/>);
    expect(wrapper.find('thead').first().html()).to.equal('<thead><tr><th></th><th>2</th><th>3</th><th>5</th></tr></thead>');
  });

  it('shows the first column as th, the others as th in non-header rows', () => {
    const wrapper = shallow(<MultiplicationTableUI n="3"/>);
    expect(wrapper.find('table > tbody > tr').first().html()).to.equal('<tr><th>2</th><td>4</td><td>6</td><td>10</td></tr>');
  });
});
