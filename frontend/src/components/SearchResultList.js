import React from 'react';
import PropTypes from 'prop-types';

const SearchResultList = ({data, onSelect}) => {
    let rows;

    if(!data.length) {
        rows = <p>No results to display</p>
    } else {
        rows = data.map(({symbol, name}) => {
            return <p key={symbol}
                      onClick={() => onSelect(symbol)}>{name}</p>
        });
    }

    return (
        <div className="search-results">
            {rows}
        </div>
    )
};

SearchResultList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        symbol: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })).isRequired
};

export default SearchResultList;