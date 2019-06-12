import React from 'react';
import './search.css';

class SearchBar extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="search-bar">
                <form onSubmit={this.props.search}>
                    <input
                        value={this.props.value}
                        placeholder="search"
                        onChange={this.props.change}
                    />
                    <button className="button" onClick={this.props.search}>Search</button>
                    <button className="button" onClick={this.props.logout}>Logout</button>
                </form>
            </div>
        );
    }
}

export default SearchBar;