import React from 'react';
import PropTypes from 'prop-types';
import {Col, Panel, Row} from 'react-bootstrap';
import Loader from './Loader';
import Error from './Error';
import StockValuationDetails from './StockValuationDetails';
import {PromiseState} from 'react-refetch';

const StockValuation = ({companyStockValuationRequest}) => {
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

StockValuation.propTypes = {
    companyStockValuationRequest: PropTypes.instanceOf(PromiseState).isRequired
};

export default StockValuation;