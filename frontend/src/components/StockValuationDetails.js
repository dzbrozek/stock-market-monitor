import React from 'react';
import PropTypes from 'prop-types';

const StockValuationDetails = ({data: {open, high, low, price, volume, close}}) => {
    return (
        <React.Fragment>
            <p>
                <b className="m-r-5">Open:</b> {Number(open).toFixed(2)}
            </p>
            <p>
                <b className="m-r-5">High:</b> {Number(high).toFixed(2)}
            </p>
            <p>
                <b className="m-r-5">Close:</b> {Number(close).toFixed(2)}
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
        </React.Fragment>
    )
};

StockValuationDetails.propTypes = {
    data: PropTypes.shape({
        open: PropTypes.string.isRequired,
        high: PropTypes.string.isRequired,
        low: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        volume: PropTypes.string.isRequired,
        close: PropTypes.string.isRequired
    })
};

export default StockValuationDetails;