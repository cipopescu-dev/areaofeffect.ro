import { LitElement, css, html } from "lit";
import mixinStyles from "../styles.js";

export class AoeStream extends LitElement {
  static properties = {};

  constructor() {
    super();
  }

  render() {
    return html`<div class="page-container">
      <iframe
        src="https://player.twitch.tv/?channel=teamliquidro&parent=teamliquid.ro"
        allowfullscreen
      >
      </iframe>
    </div>`;
  }

  static get styles() {
    return [
      mixinStyles,
      css`
        iframe {
          margin: 0 auto;
          border: none;
          display: block;
          width: min(800px, 90dvw);
          height: 450px;
          border: 1px solid var(--border);
          border-radius: 8px;
        }
      `,
    ];
  }
}
