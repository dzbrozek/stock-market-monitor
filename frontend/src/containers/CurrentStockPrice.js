// @flow
import CurrentStockPrice from '../components/CurrentStockPrice';
import {API} from '../constants';
import {connect} from 'react-refetch'

type Props = {
    company: string
}

export default connect(({company}: Props) => ({
    companyCurrentPriceRequest: {
        url: `${API.companyCurrentPrice}?company=${company}`,
        refreshInterval: 300000
    }
}))(CurrentStockPrice)