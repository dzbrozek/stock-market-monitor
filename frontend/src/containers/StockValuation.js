import StockValuation from '../components/StockValuation';
import {API} from '../constants';
import {connect} from 'react-refetch'

export default connect(({company}) => ({
  companyStockValuationRequest: `${API.companyStockValuation}?company=${company}`,
}))(StockValuation)