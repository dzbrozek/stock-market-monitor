// @flow
import React from 'react';
import type {CompanySearchList} from '../types/companies';

type Props = {
    data: CompanySearchList,
    onSelect: (symbol: string) => void
}

const SearchResultList = ({data, onSelect}: Props) => {
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

export default SearchResultList;