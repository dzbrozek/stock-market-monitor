import React from 'react';
import PropTypes from 'prop-types';
import {Col, Panel, Row} from 'react-bootstrap';
import Loader from './Loader';
import Error from './Error';

const CompanyInfo = ({company}) => {
    const data = {
        symbol: 'BA',
        name: 'The Boeing Company',
        website: 'https://www.boeing.com/',
        logo: 'https://media.glassdoor.com/sql/102/boeing-squarelogo.png'
    };
    const {symbol, name, website, logo} = data;

    return (
        <Panel>
            <Panel.Heading>Company Info</Panel.Heading>

            <Panel.Body>
                <Row>
                    <Col sm={12}>
                        <Loader/>
                        <Error message="Unable to fetch company info"/>

                        <p>
                            <b className="m-r-5">Symbol:</b> {symbol}
                        </p>
                        <p>
                            <b className="m-r-5">Name:</b> {name}
                        </p>
                        <p>
                            <b className="m-r-5">Website:</b>
                            {!!website ?
                                <a href={website}>visit</a>
                                :
                                "N/A"
                            }
                        </p>
                        <p>
                            <b className="m-r-5">Logo:</b>
                            {!!logo ?
                                <img src={logo}
                                     width={30}
                                     height={30}/>
                                :
                                "N/A"
                            }
                        </p>
                    </Col>
                </Row>
            </Panel.Body>
        </Panel>
    )
};

CompanyInfo.propTypes = {
    company: PropTypes.string.isRequired
};

export default CompanyInfo;