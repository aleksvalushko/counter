import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3004/'
});

type MinValueResponseType = {
    minValue: number
}

type MaxValueResponseType = {
    maxValue: number
}

export const counterApi = {
    getCounterMinValue() {
        return instance.get<MinValueResponseType>('counter').then(res => res.data.minValue);
    },
    increaseCounterMinValue(minValue: number) {
        return instance.post<MinValueResponseType>('counter', {minValue}).then(res => res.data.minValue);
    },
    reduceCounterMinValue(minValue: number) {
        return instance.post<MinValueResponseType>('counter', {minValue}).then(res => res.data.minValue);
    },
    getCounterMaxValue() {
        return instance.get<MaxValueResponseType>('counter').then(res => res.data.maxValue);
    },
    increaseCounterMaxValue(maxValue: number) {
        return instance.post<MaxValueResponseType>('counter', {maxValue}).then(res => res.data.maxValue);
    },
    reduceCounterMaxValue(maxValue: number) {
        return instance.post<MaxValueResponseType>('counter', {maxValue}).then(res => res.data.maxValue);
    }
};