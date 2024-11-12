import { css, html, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class MyButton extends LitElement {
    static styles = css`
        button {
            border: none;
            padding: var(--spacing-md);
            border-radius: var(--radius-md);
            
            &.is-primary {
                background-color: var(--color-blue);
            }
            
            &.is-large {
                padding: var(--spacing-lg);
            }
        }
    `;

    handleClick = () => {
        this.count++;
    }
    
    static properties = {
        label: {},
        primary: true,
        large: false,
        count: {},
    }
    
    constructor() {
        super();
        this.count = 0;
    }
    
    render() {
        return html`
          <button @click="${this.handleClick}" class="${[this.primary && 'is-primary', this.large && 'is-large'].join(' ')}"><slot>${this.label}</slot> — ${this.count} clicks</button>
        `;
    }
}

customElements.define('my-button', MyButton);