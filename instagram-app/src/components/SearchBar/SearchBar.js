import React from 'react';
import './search.css';

class SearchBar extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="search-bar">
                <img src="./sb-img.svg" alt="instagram logo" />
                <form onSubmit={this.props.search}>
                    <input 
                        value={this.props.value}
                        placeholder="search"
                        onChange={this.props.change} 
                    />
                </form>
                <img src="./sb-img2.svg" alt="instagram icons" />
            </div>
        );
    }
}

export default SearchBar;