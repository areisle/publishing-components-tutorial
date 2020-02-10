import React from 'react';
import { action } from '@storybook/addon-actions';

import { Button } from './Button';
import markdown from './Button.notes.md';

export default {
    title: 'Button',
    component: 'Button',
    parameters: {
        notes: { markdown },
    }
}

export const Default = () => (
    <Button
        onClick={action('onClick')}
    >
        default button
    </Button>
)

export const Primary = () => (
    <Button
        color='primary'
        onClick={action('onClick')}
    >
        primary button
    </Button>
)

export const Secondary = () => (
    <Button
        color='secondary'
        onClick={action('onClick')}
    >
        secondary button
    </Button>
)

export const Stressed = () => (
    <Button
        onClick={action('onClick')}
    >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum tempore amet suscipit tempora dicta consequatur necessitatibus
    </Button>
)