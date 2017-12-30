import React from 'react';
import range from 'lodash/range';
import PrimeTable from './backend/prime-table/prime-table'
import isUndefined from 'lodash/isUndefined';

class MultiplicationTableUI extends React.Component {
  render() {
    if (isUndefined(this.props.n) || this.props.n <= 0) {
      return <div></div>;
    } else {
      const primeTable = PrimeTable.generatePrimeTable(this.props.n);
      return <table className="table table-bordered">
        <thead>
          <tr>
            {range(primeTable[0].length).map((j) => <th key={'0_' + j}>{primeTable[0][j]}</th>)}
          </tr>
        </thead>
        <tbody>
          {
            range(1, primeTable.length).map((i) => <tr key={'row-' + i}>
              {
                range(primeTable[i].length).map((j) => {
                  const CellTag = j === 0
                    ? 'th'
                    : 'td';
                  return <CellTag key={i + '_' + j}>{primeTable[i][j]}</CellTag>;
                })
              }
            </tr>)
          }
        </tbody>
      </table>;
    }
  }
}

export default MultiplicationTableUI;
