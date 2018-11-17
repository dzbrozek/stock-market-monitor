import React from 'react';
import {Col, Row} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {DebounceInput} from 'react-debounce-input';

export default class SearchInput extends React.Component {
    static propTypes = {
        value: PropTypes.string,
        onChange: PropTypes.func.isRequired
    };

    render() {
        const {value, onChange} = this.props;

        return (
            <Row>
                <Col sm={12}>
                    <DebounceInput type="text"
                                   placeholder="Company symbol"
                                   debounceTimeout={300}
                                   value={value}
                                   className="form-control"
                                   onChange={e => onChange(e.target.value)}/>
                </Col>
            </Row>
        )
    }
}