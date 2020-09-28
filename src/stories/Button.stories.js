import React from 'react';
import Button from '../components/Button/Button';

export default {
    title: "Button",
    component: Button
}

export const ButtonBasicPrimary = () => {
    return (
        <Button classes={["btn-primary"]} title="Click Me" />
    )
}

export const ButtonBasicSecondary = () => {
    return (
        <Button classes={["btn-secondary"]} title="Click Me" />
    )
}

export const ButtonBasicSmall = () => {
    return (
        <Button classes={["btn-primary", 'small']} title="Click Me" />
    )
}

export const ButtonBasicLarge = () => {
    return (
        <Button classes={["btn-primary", 'large']} title="Click Me" />
    )
}

export const ButtonClickCheck = () => {

    const handleClick = () => {
        alert('clicked');
    }

    return (
        <Button classes={["btn-secondary"]} title="Click Me" click={handleClick} />
    )
}