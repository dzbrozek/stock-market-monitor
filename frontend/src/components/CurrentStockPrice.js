import React from 'react';
import PropTypes from 'prop-types';
import {Col, Panel, Row} from 'react-bootstrap';
import Loader from './Loader';
import Error from './Error';
import {PromiseState} from 'react-refetch';
import CurrentStockPriceDetails from './CurrentStockPriceDetails';

const CurrentStockPrice = ({companyCurrentPriceRequest}) => {
    let content;

    if(companyCurrentPriceRequest.pending) {
        content = <Loader/>;
    } else if(companyCurrentPriceRequest.rejected) {
        content = <Error message="Unable to fetch current stock price"/>
    } else {
        content = <CurrentStockPriceDetails data={companyCurrentPriceRequest.value}/>;
    }

    return (
        <Panel>
            <Panel.Heading>Current Stock Price</Panel.Heading>

            <Panel.Body>
                <Row>
                    <Col sm={12}>
                        {content}
                    </Col>
                </Row>
            </Panel.Body>
        </Panel>

    );
};

CurrentStockPrice.propTypes = {
    companyCurrentPriceRequest: PropTypes.instanceOf(PromiseState).isRequired
};

export default CurrentStockPrice;
