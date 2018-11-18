import CompanyInfo from '../components/CompanyInfo';
import {API} from '../constants';
import {connect} from 'react-refetch'

export default connect(({company}) => ({
  companyInfoRequest: `${API.companyInfo}?company=${company}`,
}))(CompanyInfo)