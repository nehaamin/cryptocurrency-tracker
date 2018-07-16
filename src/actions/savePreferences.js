import { put, get } from 'axios';

const BASE_URL = '//localhost:5000';

const handleError = err => {
    console.error(err);
    return {};
}

export const getPreferences = (username = '') => {
    return get(`${BASE_URL}/user/${username}`)
        .then(res => {
            return res.data;
        }, handleError);
}

export const savePreferences = (username, symbols) => {
    return put(`${BASE_URL}/user/${username}`, { symbols })
        .then(
            ({data}) => data
        , handleError)
}