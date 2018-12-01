// @flow
import React from 'react';
import {Col, Panel, Row} from 'react-bootstrap';
import Loader from './Loader';
import Error from './Error';
import StockValuationDetails from './StockValuationDetails';
import type {PromiseState} from '../types/react-refetch';
import type {CompanyValuation} from '../types/companies';

type Props = {
    companyStockValuationRequest: PromiseState<CompanyValuation>
};

const StockValuation = ({companyStockValuationRequest}: Props) => {
    let content;

    if(companyStockValuationRequest.pending) {
        content = <Loader/>;
    } else if(companyStockValuationRequest.rejected) {
        content = <Error message="Unable to fetch stock valuation"/>
    } else {
        content = <StockValuationDetails data={companyStockValuationRequest.value}/>;
    }

    return (
        <Panel>
            <Panel.Heading>Stock Valuation</Panel.Heading>
            
            <Panel.Body>
                <Row>
                    <Col sm={12}>
                        {content}
                    </Col>
                </Row>
            </Panel.Body>
        </Panel>
    )
};

export default StockValuation;