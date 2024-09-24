import { LitElement, css, html } from "lit";
import mixinStyles from "../styles.js";

export class AoeHome extends LitElement {
  static properties = {};

  constructor() {
    super();
  }

  render() {
    return html`<div class="page-container">
      <div class="info">
        <div>World of Warcraft Classic</div>
        <div>SoD - Living Flame EU</div>
        <div>🇷🇴 Romanian guild</div>
      </div>
    </div>`;
  }

  static styles = [
    mixinStyles,
    css`
      .info {
        text-align: center;
      }
      .info > :nth-child(1) {
        color: var(--acc3);
        font-weight: bolder;
        font-size: 2rem;
        line-height: 4rem;
        text-shadow: 3px 3px black;
      }
      .info > :nth-child(2) {
        font-size: 1.5rem;
        line-height: 2rem;
        text-shadow: 3px 3px black;
      }
      .info > :nth-child(3) {
        color: var(--txt2);
        line-height: 2rem;
      }
    `,
  ];
}
