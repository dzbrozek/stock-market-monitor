import React from 'react';
import PropTypes from 'prop-types';

const CompanyInfoDetails = ({data: {symbol, name, website, logo}}) => {
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

CompanyInfoDetails.propTypes = {
    data: PropTypes.shape({
        symbol: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        website: PropTypes.string,
        logo: PropTypes.string
    }).isRequired
};

export default CompanyInfoDetails;