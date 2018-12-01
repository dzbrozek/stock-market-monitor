// @flow
import React from 'react';
import {Col, Panel, Row} from 'react-bootstrap';
import Loader from './Loader';
import Error from './Error';
import CurrentStockPriceDetails from './CurrentStockPriceDetails';
import type {PromiseState} from '../types/react-refetch';
import type {CompanyPrice} from '../types/companies';

type Props = {
    companyCurrentPriceRequest: PromiseState<CompanyPrice>
};

const CurrentStockPrice = ({companyCurrentPriceRequest}: Props) => {
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

export default CurrentStockPrice;
