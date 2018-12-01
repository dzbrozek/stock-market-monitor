// @flow
import React from 'react';
import type {CompanyValuation} from '../types/companies';

type Props = {
    data: CompanyValuation
}

const StockValuationDetails = ({data: {open, high, low, price, volume, close}}: Props) => {
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

export default StockValuationDetails;