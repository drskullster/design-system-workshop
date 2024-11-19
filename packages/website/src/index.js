import { Button } from '@ds/components/build/index.js';
import { render } from 'lit';

import '@ds/design-tokens/build/tokens.css';
import '@ds/components/build/styles.css';

const button = Button({
  label: 'Bouton ajouté dynamiquement',
  large: true,
  icon: 'fa-phone',
});

render(button, document.querySelector('#dynamic-button'));
