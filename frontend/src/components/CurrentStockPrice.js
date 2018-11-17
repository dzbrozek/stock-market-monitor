import React from 'react';
import PropTypes from 'prop-types';
import {Col, Panel, Row} from 'react-bootstrap';

class CurrentStockPrice extends React.Component {
    renderPrice() {
        const data = {
            is_open: true,
            price: '106.8000'
        };

        const {is_open, price} = data;

        if(!is_open) {
            return <p className="warning">Stock market is currently closed</p>
        } else if(!price) {
            return <p className="warning">Price not available</p>;
        }

        return (
            <p>
                <b className="m-r-5">Current Price:</b> {Number(price).toFixed(2)}
            </p>
        )
    }

    render() {
        return (
            <Panel>
                <Panel.Heading>Current Stock Price</Panel.Heading>

                <Panel.Body>
                    <Row>
                        <Col sm={12}>
                            {this.renderPrice()}
                        </Col>
                    </Row>
                </Panel.Body>
            </Panel>

        );
    }
}

CurrentStockPrice.propTypes = {
    company: PropTypes.string.isRequired
};

export default CurrentStockPrice;
