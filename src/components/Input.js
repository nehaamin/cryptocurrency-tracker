import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }
    
    handleAdd = () => {
        this.props.onAdd(this.state.value);
        this.setState({ value: '' });
    }

    handleEnter = e => {
        if(e.key === 'Enter') {
            this.props.onAdd(this.state.value);
            this.setState({ value: '' });
        }
    }
      
    handleChange = e => {
        const value = e.target.value.toUpperCase();
        this.setState({ value });
    }

    render() {
        const { value } = this.state;
        return (
            <tr className='tr'>
                <td>
                    <input
                    type='text'
                    className='input'
                    value={value}
                    onKeyPress={this.handleEnter}
                    onChange={this.handleChange}
                />
               </td>
                <td>
                    <button className='td button' onClick={this.handleAdd}>Add</button>
                </td>
            </tr>
        )
    }
}

export default Input;
