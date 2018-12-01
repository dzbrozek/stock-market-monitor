// @flow
import React from 'react';
import CompanyInfo from '../containers/CompanyInfo';
import StockValuation from '../containers/StockValuation';
import CurrentStockPrice from '../containers/CurrentStockPrice';
import {Col, Row} from 'react-bootstrap';

type Props = {
    company: string
};

const CompanyReport = ({company}: Props) => {
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

export default CompanyReport;