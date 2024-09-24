import { LitElement, css, html } from "lit";
import { RouteMixin } from "simple-wc-router";
import { AoeStates } from "../../config/states.js";

export class AoeMenu extends RouteMixin(LitElement) {
  static properties = {};

  constructor() {
    super();
  }

  render() {
    return html` <div class="menu-container shadow">
      <div class="menu-item-container">
        ${AoeStates.filter(({ menuEntry }) => !!menuEntry).map(
          ({ path, menuEntry, extern }) =>
            html` <ro-aoe-nav-button .extern="${extern}" route="${path}"
              >${menuEntry}</ro-aoe-nav-button
            >`
        )}
      </div>
    </div>`;
  }

  static styles = [
    css`
      :host {
        display: block;
      }
      .shadow {
        filter: drop-shadow(var(--shadow));
        box-shadow: var(--shadow);
        -webkit-box-shadow: var(--shadow);
      }
      .menu-container {
        margin: 1rem auto;
        width: min(800px, 90dvw);
        padding: 1rem;
        border: 1px solid var(--border);
        border-radius: 16px;
      }
      .menu-item-container {
        display: flex;
        justify-content: space-between;
      }
    `,
  ];
}
