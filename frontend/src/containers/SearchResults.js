// @flow
import SearchResults from '../components/SearchResults';
import {API} from '../constants';
import {connect} from 'react-refetch'

type Props = {
    query: string
}

export default connect(({query}: Props) => ({
  companySearchRequest: `${API.companySearch}?query=${query}`,
}))(SearchResults)