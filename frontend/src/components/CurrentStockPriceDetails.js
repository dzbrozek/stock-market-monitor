// @flow
import React from 'react';
import type {CompanyPrice} from '../types/companies';

type Props = {
    data: CompanyPrice
}

const CurrentStockPriceDetails = ({data: {is_open, price}}: Props) => {
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

export default CurrentStockPriceDetails;