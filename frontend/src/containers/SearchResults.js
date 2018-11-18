import SearchResults from '../components/SearchResults';
import {API} from '../constants';
import {connect} from 'react-refetch'

export default connect(({query}) => ({
  companySearchRequest: `${API.companySearch}?query=${query}`,
}))(SearchResults)