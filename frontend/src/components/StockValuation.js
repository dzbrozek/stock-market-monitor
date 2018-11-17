import React from 'react';
import PropTypes from 'prop-types';
import {Col, Panel, Row} from 'react-bootstrap';

const StockValuation = ({company}) => {
    const data = {
        open: '107.0800',
        high: '108.8800',
        low: '106.8000',
        price: '108.2900',
        volume: 27412598
    };
    const {open, high, low, price, volume} = data;

    return (
        <Panel>
            <Panel.Heading>Stock Valuation</Panel.Heading>
            
            <Panel.Body>
                <Row>
                    <Col sm={12}>
                        <p>
                            <b className="m-r-5">Open:</b> {Number(open).toFixed(2)}
                        </p>
                        <p>
                            <b className="m-r-5">High:</b> {Number(high).toFixed(2)}
                        </p>
                        <p>
                            <b className="m-r-5">Low:</b> {Number(low).toFixed(2)}
                        </p>
                        <p>
                            <b className="m-r-5">Price:</b> {Number(price).toFixed(2)}
                        </p>
                        <p>
                            <b className="m-r-5">Volume:</b> {volume}
                        </p>
                    </Col>
                </Row>
            </Panel.Body>
        </Panel>
    )
};

StockValuation.propTypes = {
    company: PropTypes.string.isRequired
};

export default StockValuation;