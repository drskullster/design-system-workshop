import { html } from 'lit';

import './button.css';

export const Button = ({ outlined, large, label, onClick, icon }) => {
    const iconHTML = html`<i class="fa-solid ${icon}"></i>`;
    
    return html`
    <button
      type="button"
      class="${['ds-button', outlined && 'is-outlined', large && 'is-lg'].join(' ')}"
      @click=${onClick}
    >
      ${icon ? iconHTML : ''}
      ${label}
    </button>
  `;
};
