import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3004/'
});

type ValueResponseType = {
    maxValue: number
    minValue: number
}

export const counterApi = {
    getCounterMinValue() {
        return instance.get<ValueResponseType>('counter').then(res => res.data.minValue);
    },
    increaseCounterMinValue(maxValue: number, minValue: number) {
        return instance.put<ValueResponseType>('counter', {maxValue, minValue})
            .then(res => res.data.minValue);
    },
    reduceCounterMinValue(maxValue: number, minValue: number) {
        return instance.put<ValueResponseType>('counter', {maxValue, minValue})
            .then(res => res.data.minValue);
    },
    getCounterMaxValue() {
        return instance.get<ValueResponseType>('counter').then(res => res.data.maxValue);
    },
    increaseCounterMaxValue(maxValue: number, minValue: number) {
        return instance.put<ValueResponseType>('counter', {maxValue, minValue})
            .then(res => res.data.maxValue);
    },
    reduceCounterMaxValue(maxValue: number, minValue: number) {
        return instance.put<ValueResponseType>('counter', {maxValue, minValue})
            .then(res => res.data.maxValue);
    }
};