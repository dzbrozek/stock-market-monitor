import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from 'react-bootstrap';

export default class SearchResults extends React.Component {
    static propTypes = {
        query: PropTypes.string,
        onSelect: PropTypes.func.isRequired
    };

    renderRows() {
        const {onSelect} = this.props;
        const results = [
            {
                symbol: 'BA',
                name: 'The Boeing Company'
            }, {
                symbol: 'BABA',
                name: 'Alibaba Group Holding Limited'
            }, {
                symbol: 'BAC',
                name: 'Bank of America Corporation'
            }
        ];

        if(!results.length) {
            return <p>No results to display</p>
        }

        return results.map(({symbol, name}) => {
            return <p key={symbol}
                      onClick={() => onSelect(symbol)}>{name}</p>
        });
    }

    render() {
        const {query} = this.props;

        if (!query) {
            return null;
        }

        return (
            <Row>
                <Col sm="12">
                    <div className="search-results">
                        {this.renderRows()}
                    </div>
                </Col>
            </Row>
        )
    }
}