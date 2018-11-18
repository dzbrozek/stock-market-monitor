import React from 'react';
import PropTypes from 'prop-types';
import CompanyInfo from '../containers/CompanyInfo';
import StockValuation from '../containers/StockValuation';
import CurrentStockPrice from '../containers/CurrentStockPrice';
import {Col, Row} from 'react-bootstrap';

const CompanyReport = ({company}) => {
    if(!company) {
        return null;
    }

    return (
        <Row>
            <Col sm={12}>
                <CompanyInfo company={company}/>

                <StockValuation company={company}/>

                <CurrentStockPrice company={company}/>
            </Col>
        </Row>
    )
};

CompanyReport.propTypes = {
    company: PropTypes.string
};

export default CompanyReport;