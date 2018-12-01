// @flow
export type CompanySearch = {
	symbol: string,
	name: string
}

export type CompanySearchList = Array<CompanySearch>;


export type CompanyPrice = {
    is_open: boolean,
    price: ?string
}

export type CompanyValuation = {
	open: string,
    high: string,
    low: string,
    price: string,
    volume: string,
    close: string
}

export type CompanyDetails = {
    symbol: string,
    name: string,
    website: string,
    logo: string
}