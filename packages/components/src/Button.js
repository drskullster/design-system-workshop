import { html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

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
