import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class KwcTemplate extends PolymerElement {
    static get template() {
        return html`
            <style>
                :host {
                    display: block;
                }
            </style>
            <div>Hello World!</div>
        `;
    }
}

customElements.define('kwc-template', KwcTemplate);
