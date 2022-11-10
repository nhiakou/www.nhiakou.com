import template from './template.mjs';

class SwMain extends HTMLElement {
    #hash = window.location.hash ? "SW-" + window.location.hash.substring(1).toUpperCase() : "SW-STEALTH";

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        window.addEventListener("hashchange", event => window.location.reload());
    }

    connectedCallback() {
        this.style.display = 'block';
        this.#render();
    }

    #render() {
        this.shadowRoot.querySelector("slot").assignedElements().forEach(element => element.style.display = 'none');
        this.shadowRoot.querySelector("slot").assignedElements().find(element => element.tagName === this.#hash).render();
    }
}

customElements.define("sw-main", SwMain);