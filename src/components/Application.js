import React, { Component } from 'react';
import { getUsername } from '../getUsername';
import { getCoinValue } from '../actions/getCoinValue';
import { savePreferences, getPreferences } from '../actions/savePreferences';

import Row from './Row';
import Input from './Input';

export default class Application extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            username: getUsername(),
            symbols: [],
            valueMap: {}
        }
    }

    async componentDidMount() {
        const { username } = this.state;
        
        const { symbols } = await getPreferences(username);
        if (symbols) {
            this.setState({ symbols });
        }
    }

    getValues = async () => {
        const { symbols } = this.state;
        const valueMap = await getCoinValue(symbols);
        this.setState({ valueMap });
    }

    handleAddSymbol = symbol => {
        const symbols = [...this.state.symbols, symbol]
        this.setState({ symbols });
    }
    
    handleRowClick = symbolToRemove => {
        const { symbols: oldSymbols } = this.state;
        const symbols = oldSymbols.filter(symbol => symbol !== symbolToRemove);
        this.setState({ symbols });
    }

    savePreferences = () => {
        const { symbols, username } = this.state;
        savePreferences(username, symbols);
    }

    updateUsername = event => {
        const username = event.target.value;
        this.setState({ username });
    }

    render() {
        const { username } = this.state;

        return (
            <div>
                <div style={{display: 'inline'}}>
                    Save As:
                    <span className='label' style={{display: 'inline'}}>user/ </span>
                    <input
                        type='text'
                        className='input'
                        style={{width: 'auto', display: 'inline'}}
                        value={username}
                        onChange={this.updateUsername}
                    />
                </div>
                <div className='buttons'>
                    <button className='button is-primary' onClick={this.getValues}>Refresh</button>
                    <button className='button is-success' onClick={this.savePreferences}>Save</button>        
                </div>
                <table className='table'>
                    <thead className='thead'>
                        <tr className='tr'>
                            <th className='th'>Symbol</th>
                            <th className='th'>Value</th>
                        </tr>
                        </thead>
                        <tbody className='tbody'>
                            {this.state.symbols.map(symbol => (
                                <Row onRowClick={this.handleRowClick} key={symbol} symbol={symbol} {...this.state.valueMap[symbol]} />
                            ))}
                            <Input onAdd={this.handleAddSymbol} />
                        </tbody>
                </table>
            </div>
        )
    }
}