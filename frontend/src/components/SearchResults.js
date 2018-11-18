import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from 'react-bootstrap';
import Error from './Error';
import {PromiseState} from 'react-refetch';
import SearchResultList from './SearchResultList';

export default class SearchResults extends React.Component {
    static propTypes = {
        onSelect: PropTypes.func.isRequired,
        companySearchRequest: PropTypes.instanceOf(PromiseState).isRequired
    };

    render() {
        let content;
        const {companySearchRequest, onSelect} = this.props;

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
    }
}