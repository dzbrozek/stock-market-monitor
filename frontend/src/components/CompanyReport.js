import React from 'react';
import PropTypes from 'prop-types';
import CompanyInfo from './CompanyInfo';
import StockValuation from './StockValuation';
import CurrentStockPrice from './CurrentStockPrice';

const CompanyReport = ({company}) => {
    if(!company) {
        return null;
    }

    return (
        <React.Fragment>
            <CompanyInfo company={company}/>

            <StockValuation company={company}/>

            <CurrentStockPrice company={company}/>
        </React.Fragment>
    )
};

CompanyReport.propTypes = {
    company: PropTypes.string
};

export default CompanyReport;