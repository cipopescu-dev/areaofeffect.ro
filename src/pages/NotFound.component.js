import { LitElement, css, html } from "lit";

export class NotFound extends LitElement {
  static properties = {};

  render() {
    return html`<h2>404 The requested page could not be found</h2>`;
  }

  static styles = [css``];
}

window.customElements.define("aoe-notfound", NotFound);
