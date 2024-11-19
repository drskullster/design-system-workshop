/** @type { import('@storybook/web-components').Preview } */

import '@mega-ds/design-tokens/build/tokens.css';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
