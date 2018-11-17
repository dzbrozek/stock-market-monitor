import React from 'react';
import {Col, Row} from 'react-bootstrap';

const PageError = () => {
    return (
        <Row>
            <Col sm={12}>
                <h1>Error</h1>
                <p>Something went wrong</p>
            </Col>
        </Row>
    );
};

export default PageError;