import React from 'react';
import Counter from '../components/Counter/Counter';
import { withKnobs, number } from '@storybook/addon-knobs';

export default {
    title: "Counter",
    component: Counter,
    decorators: [withKnobs]
}

export const CounterInitial = () => {
    return (
        <Counter/>
    )
}

export const CounterwithInitialValue = () => {
    return (
        <Counter count={number('count', 0)}/>
    )
}