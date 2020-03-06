import { LitElement, html } from "@polymer/lit-element";
import './dynamic-vaadin-notification';
import '@vaadin/vaadin-button/vaadin-button';
class MyElement extends LitElement{
    render(){
        return html `
            <dynamic-vaadin-notification theme = "error"></dynamic-vaadin-notification>
            <vaadin-button @click = ${this.click.bind(this)}>Click to show</vaadin-button>
            <vaadin-button @click = ${this.clickNew.bind(this)}>Click to show New message</vaadin-button>
        `;
    }
    click(e){
        var notification = this.shadowRoot.querySelector("dynamic-vaadin-notification");
        notification.setAttribute("message","Hello there");
        notification.requestUpdate();

    }
    clickNew(e){
        var notification = this.shadowRoot.querySelector("dynamic-vaadin-notification");
        notification.setAttribute("message","New Message");
        notification.requestUpdate();

    }
}
customElements.define("my-element",MyElement);