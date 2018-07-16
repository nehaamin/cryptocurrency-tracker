import React, { Component } from 'react';

class Row extends Component {
    render() {
        const { symbol, USD, onRowClick } = this.props; 
        return <tr className='tr' onClick={() => onRowClick(symbol)}>
            <td className='td'>{symbol}</td>
            <td className='td'>{USD}</td>
        </tr>
    }
};

export default Row;