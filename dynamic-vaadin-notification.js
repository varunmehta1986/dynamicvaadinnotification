import { LitElement, html } from '@polymer/lit-element';
import '@vaadin/vaadin-notification/vaadin-notification';

class DynamicVaadinNotification extends LitElement {
    static get properties() {
        return {
            theme: { type: String },
            message: { type: String }
        };
    }

    render() {
        return html`
            <vaadin-notification theme = ${this.theme}>
            </vaadin-notification>
        `;
    }
    get notification() {
        return this.shadowRoot.querySelector("vaadin-notification");
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "message") {
            this.notification.renderer = function (root) {
                root.textContent = newValue;
            }
            this.notification.open();
        }
        super.attributeChangedCallback(name, oldValue, newValue);
    }
}
customElements.define("dynamic-vaadin-notification", DynamicVaadinNotification);