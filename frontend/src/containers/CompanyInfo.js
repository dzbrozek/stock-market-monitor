// @flow
import CompanyInfo from '../components/CompanyInfo';
import {API} from '../constants';
import {connect} from 'react-refetch'

type Props = {
    company: string
}

export default connect(({company}: Props) => ({
  companyInfoRequest: `${API.companyInfo}?company=${company}`,
}))(CompanyInfo)