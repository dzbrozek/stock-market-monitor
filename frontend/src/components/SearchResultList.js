// @flow
import React from 'react';
import type {CompanySearchList} from '../types/companies';

type Props = {
    data: CompanySearchList,
    onSelect: (symbol: string) => void
}

const SearchResultList = ({data, onSelect}: Props) => {
    let content;

    if(!data.length) {
        content = <p>No results to display</p>
    } else {
        content = data.map(({symbol, name}) => {
            return <p key={symbol}
                      onClick={() => onSelect(symbol)}>{name}</p>
        });
    }

    return (
        <div className="search-results">
            {content}
        </div>
    )
};

export default SearchResultList;