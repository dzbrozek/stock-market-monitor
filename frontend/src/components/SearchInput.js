// @flow
import React from 'react';
import {Col, Row} from 'react-bootstrap';
import {DebounceInput} from 'react-debounce-input';

type Props = {
    value: string,
    onChange: (value: string) => void
}

const SearchInput = ({value, onChange}: Props) => {
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
};

export default SearchInput;