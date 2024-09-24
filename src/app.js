import { LitElement, css, html } from "lit";
import { Router } from "simple-wc-router";
import { AoeStates } from "./config/states.js";
import logoSvg from "/logo.svg";

export class AoeApp extends Router(LitElement) {
  static routes = AoeStates;

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    window.scrollTo(0, 0);
    return html` <img class="logo" src="${logoSvg}" alt="AoE logo" />
      <ro-aoe-menu></ro-aoe-menu>
      ${this.routeElement}`;
  }

  static styles = [
    css`
      .logo {
        max-width: 800px;
        display: block;
        margin: 0 auto;
        pointer-events: none;
      }
    `,
  ];
}
