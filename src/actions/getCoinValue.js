import { get } from 'axios';
import { getUsername } from '../getUsername';

const BASE_URL = 'https://min-api.cryptocompare.com/data/pricemulti';

const defaultCurrency = ['USD'];

const buildUrl = ({ symbols, currency = defaultCurrency }) => {
    return {
        method: 'get',
        params: {
            fsyms: symbols.join(','),
            tsyms: currency.join(',')
        }
    }   
}

export const getCoinValue = (symbols) => {
    return get(BASE_URL, buildUrl({symbols})).then(
        ({data}) => data
    )
}