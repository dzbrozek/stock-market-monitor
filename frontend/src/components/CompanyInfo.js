// @flow
import React from 'react';
import {Col, Panel, Row} from 'react-bootstrap';
import Loader from './Loader';
import Error from './Error';
import CompanyInfoDetails from './CompanyInfoDetails';
import type {PromiseState} from '../types/react-refetch';
import type {CompanyDetails} from '../types/companies';

type Props = {
    companyInfoRequest: PromiseState<CompanyDetails>
};

const CompanyInfo = ({companyInfoRequest}: Props) => {
    let content;

    if(companyInfoRequest.pending) {
        content = <Loader/>;
    } else if(companyInfoRequest.rejected) {
        content = <Error message="Unable to fetch company info"/>
    } else {
        content = <CompanyInfoDetails data={companyInfoRequest.value}/>;
    }

    return (
        <Panel>
            <Panel.Heading>Company Info</Panel.Heading>

            <Panel.Body>
                <Row>
                    <Col sm={12}>
                        {content}
                    </Col>
                </Row>
            </Panel.Body>
        </Panel>
    )
};

export default CompanyInfo;