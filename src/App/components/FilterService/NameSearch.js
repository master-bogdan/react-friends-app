import React, { Component } from 'react';
import './FilterService.css';

class NameSearch extends Component {

    onNameSearch = (event) => {
        this.props.handlerNameSearch(event.target.value.toLowerCase());
    }

    render() {
        return (
            <div className="name-search">
                <p>Search by name</p>
                <input 
                    type="text" 
                    onChange={this.onNameSearch} 
                />
            </div>
        )
    }
}

export default NameSearch;