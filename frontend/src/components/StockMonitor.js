import React from 'react';
import {Col, Row} from 'react-bootstrap';
import SearchInput from './SearchInput';
import CompanyReport from './CompanyReport';
import SearchResults from '../containers/SearchResults';

export default class StockMonitor extends React.Component {
    state = {
        selectedCompany: null,
        query: '',
        showSearchResults: true
    };

    changeQuery = query => {
        this.setState({
            query,
            selectedCompany: null,
            showSearchResults: true
        })
    };

    selectCompany = symbol => {
        this.setState({
            selectedCompany: symbol,
            query: symbol,
            showSearchResults: false
        })
    };

    render() {
        const {query, selectedCompany, showSearchResults} = this.state;
        const showAutocomplete = showSearchResults && query;

        return (
            <React.Fragment>
                <Row className="m-b-10">
                    <Col sm={12}>
                        <h1>Stock Monitor</h1>
                    </Col>
                </Row>

                <Row className="m-b-10 search-row">
                    <Col sm={12}>
                        <SearchInput value={query}
                                     onChange={this.changeQuery}/>

                        {showAutocomplete &&
                            <SearchResults query={query}
                                           onSelect={this.selectCompany}/>
                        }
                    </Col>
                </Row>

                <CompanyReport company={selectedCompany}/>
            </React.Fragment>
        )
    }
}