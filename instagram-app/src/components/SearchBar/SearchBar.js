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
                <input value="search" />
                <img src="./sb-img2.svg" alt="instagram icons" />
            </div>
        );
    }
}

export default SearchBar;