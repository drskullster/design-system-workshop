import './Button';
import { html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    title: 'Components/Button',
    tags: ['autodocs'],
    render: ({ outlined, large, label }) => html`<my-button outlined="${outlined ? outlined : ''}" large="${large ? large : ''}">${label}</my-button>`,
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
    args: {
        large: false,
        label: 'Trouvez votre abonnement GSM',
    },
};

export const Outlined = {
    args: {
        label: 'En savoir plus',
        outlined: true,
        large: false,
    },
};

export const Large = {
    args: {
        large: true,
        outlined: false,
        label: 'Calculez votre prix',
    },
};
