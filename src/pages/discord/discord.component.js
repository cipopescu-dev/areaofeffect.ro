import { LitElement, css, html } from "lit";
import mixinStyles from "../styles.js";

export class AoeDiscord extends LitElement {
  static properties = {};

  constructor() {
    super();
  }

  render() {
    return html`<div class="page-container">
      <iframe
        src="https://discord.com/widget?id=1197960195532410962&theme=dark"
        allowtransparency="true"
        frameborder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      ></iframe>
    </div>`;
  }

  static styles = [
    mixinStyles,
    css`
      iframe {
        display: block;
        margin: 1rem auto;
        width: min(800px, 90dvw);
        height: 450px;
        border: 1px solid var(--border);
        border-radius: 8px;
      }
    `,
  ];
}
