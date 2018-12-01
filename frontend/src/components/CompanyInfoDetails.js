// @flow
import React from 'react';
import type {CompanyDetails} from '../types/companies';

type Props = {
    data: CompanyDetails
}

const CompanyInfoDetails = ({data: {symbol, name, website, logo}}: Props) => {
    return (
        <React.Fragment>
            <p>
                <b className="m-r-5">Symbol:</b> {symbol}
            </p>
            <p>
                <b className="m-r-5">Name:</b> {name}
            </p>
            <p>
                <b className="m-r-5">Website:</b>
                {!!website ?
                    <a href={website}
                       target="_blank"
                       rel="noopener noreferrer">visit</a>
                    :
                    "N/A"
                }
            </p>
            <p>
                <b className="m-r-5">Logo:</b>
                {!!logo ?
                    <img src={logo}
                         width={30}
                         height={30}
                         alt="logo"/>
                    :
                    "N/A"
                }
            </p>
        </React.Fragment>
    )
};

export default CompanyInfoDetails;