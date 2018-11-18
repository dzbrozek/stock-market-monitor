import React from 'react';
import PropTypes from 'prop-types';

const CurrentStockPrice = ({data: {is_open, price}}) => {
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
};

CurrentStockPrice.propTypes = {
    data: PropTypes.shape({
        is_open: PropTypes.bool.isRequired
    })
};

export default CurrentStockPrice;