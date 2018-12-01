// @flow
import StockValuation from '../components/StockValuation';
import {API} from '../constants';
import {connect} from 'react-refetch'

type Props = {
    company: string
}

export default connect(({company}: Props) => ({
  companyStockValuationRequest: `${API.companyStockValuation}?company=${company}`,
}))(StockValuation)