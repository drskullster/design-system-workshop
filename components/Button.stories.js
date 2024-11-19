import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    title: 'Components/Button',
    tags: ['autodocs'],
    render: (args) => Button(args),
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
    args: {
        icon: '',
        large: false,
        outlined: false,
        label: 'Trouvez votre abonnement GSM',
    },
};

export const Outlined = {
    args: {
        ...Default.args,
        label: 'En savoir plus',
        outlined: true,
    },
};

export const Large = {
    args: {
        ...Default.args,
        large: true,
        label: 'Calculez votre prix',
    },
};

export const WithIcon = {
    args: {
        ...Default.args,
        label: 'Rappelez-moi',
        icon: 'fa-phone',
    },
};
