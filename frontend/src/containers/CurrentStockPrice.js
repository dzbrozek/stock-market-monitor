import CurrentStockPrice from '../components/CurrentStockPrice';
import {API} from '../constants';
import {connect} from 'react-refetch'

export default connect(({company}) => ({
    companyCurrentPriceRequest: {
        url: `${API.companyCurrentPrice}?company=${company}`,
        refreshInterval: 3000
    }
}))(CurrentStockPrice)