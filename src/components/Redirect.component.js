import { LitElement, html } from "lit";
import { RouteMixin } from "simple-wc-router";

export class Redirect extends RouteMixin(LitElement) {
  connectedCallback() {
    super.connectedCallback();
    this.navigate();
  }

  render() {
    return html`<h2>Redirecting to:</h2>
      <a href="${this.route}">${this.route}</a>`;
  }
}

window.customElements.define("aoe-redirect", Redirect);
