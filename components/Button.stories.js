import './Button';
import { html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    title: 'Components/Button',
    tags: ['autodocs'],
    render: ({ primary, large, label }) => html`<my-button primary="${primary ? primary : ''}" large="${large ? large : ''}">${label}</my-button>`,
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
    args: {
        primary: true,
        large: false,
        label: 'Button',
    },
};

export const Secondary = {
    args: {
        label: 'Button',
        primary: false,
        large: false,
    },
};

export const Large = {
    args: {
        large: false,
        primary: false,
        label: 'Button',
    },
};
