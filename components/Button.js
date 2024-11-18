import { css, html, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class MyButton extends LitElement {
    static styles = css`
        button {
            border: none;
            /** beaucoup de valeurs répétées depuis figma -> PAS DE SINGLE POINT OF TRUTH **/
            padding: var(--spacing-2) var(--spacing-3);
            border-radius: var(--shape-radius-full);
            color: var(--color-text-primary);
            font-weight: var(--typography-fontweight-strong);
            font-size: var(--typography-body-md-font-size);
            background-color: var(--color-bg-accent);
            transition: var(--transition-md);
            
            &:not(.is-outlined):hover {
                background-color: var(--color-bg-strong);
                color: var(--color-bg-accent);
            }
            
            &.is-outlined {
                background-color: white;
                border: solid 2px var(--color-bg-accent); 
                
                &:hover {
                    background-color: var(--color-bg-accent);
                }
            }
            
            &.is-large {
                font-size: var(--typography-fontsize-body-lg);
            }
        }
    `;

    handleClick = () => {
        this.count++;
        console.log(this.count);
    }
    
    static properties = {
        label: {},
        outlined: true,
        large: false,
        count: {},
    }
    
    constructor() {
        super();
        this.count = 0;
    }
    
    render() {
        return html`
          <button @click="${this.handleClick}" class="${[this.outlined && 'is-outlined', this.large && 'is-large'].join(' ')}"><slot>${this.label}</slot></button>
        `;
    }
}

customElements.define('my-button', MyButton);