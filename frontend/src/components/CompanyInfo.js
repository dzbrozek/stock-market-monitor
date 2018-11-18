import React from 'react';
import PropTypes from 'prop-types';
import {Col, Panel, Row} from 'react-bootstrap';
import Loader from './Loader';
import Error from './Error';
import CompanyInfoDetails from './CompanyInfoDetails';
import {PromiseState} from 'react-refetch';

const CompanyInfo = ({companyInfoRequest}) => {
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

CompanyInfo.propTypes = {
    companyInfoRequest: PropTypes.instanceOf(PromiseState).isRequired
};

export default CompanyInfo;