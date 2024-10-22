import { LitElement, css, html } from "lit-element";
import { RouteMixin } from "simple-wc-router";

export class NavButton extends RouteMixin(LitElement) {
  static get properties() {
    return {
      route: String,
      disabled: Boolean,
      extern: Boolean,
    };
  }
  static get styles() {
    return css`
      :host > button.active {
        color: var(--acc2);
      }
      :host > button {
        font-size: 1rem;
        font-weight: bolder;
        background: none;
        color: inherit;
        border: none;
      }
      :host > button:hover {
        color: var(--acc3);
        scale: 1.1;
        cursor: pointer;
      }
    `;
  }
  handleClick() {
    if (this.disabled) this.navigate("/");
    if (this.extern) {
      window.location.href = this.route;
      return;
    }
    this.navigate();
  }
  render() {
    const activeClass = this.isRouteActive ? "active" : "";
    const clickHandler = this.handleClick.bind(this);
    return html`
      <button class="${activeClass}" @click="${clickHandler}">
        <slot></slot>
      </button>
    `;
  }
}
