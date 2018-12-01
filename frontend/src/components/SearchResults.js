// @flow
import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Error from './Error';
import SearchResultList from './SearchResultList';
import type {PromiseState} from '../types/react-refetch';
import type {CompanySearchList} from '../types/companies';

type Props = {
    onSelect: (symbol: string) => void,
    companySearchRequest: PromiseState<CompanySearchList>
}

const SearchResults = ({companySearchRequest, onSelect}: Props) => {
    let content;

    if(companySearchRequest.pending) {
        return null;
    } else if(companySearchRequest.rejected) {
        content = <Error message="Unable to find companies"/>
    } else {
        content = <SearchResultList data={companySearchRequest.value}
                                    onSelect={onSelect}/>
    }

    return (
        <Row>
            <Col sm={12}>
                {content}
            </Col>
        </Row>
    )
};

export default SearchResults;