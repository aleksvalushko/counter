import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3004/'
});

type ValueResponseType = {
    value: number
}

export const counterApi = {
    getCounterValue() {
        return instance.get<ValueResponseType>('counter').then(res => res.data.value);
    },
    increaseCounterValue(value: number) {
        return instance.post<ValueResponseType>('counter', {value}).then(res => res.data.value);
    },
    reduceCounterValue(value: number) {
        return instance.post<ValueResponseType>('counter', {value}).then(res => res.data.value);
    }
};