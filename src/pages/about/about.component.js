import { LitElement, css, html } from "lit";
import mixinStyles from "../styles.js";
import bwd1 from "./assets/bwd1.webp";
import bwd2 from "./assets/bwd2.webp";
import drunken from "./assets/drunken.webp";
import gno1 from "./assets/gno1.webp";
import gno2 from "./assets/gno2.webp";
import roster from "./assets/roster.webp";

export class AoeAbout extends LitElement {
  static properties = {};

  constructor() {
    super();
  }

  render() {
    const alt = "AoE-Living Flame people";
    return html`<div class="page-container">
      <div class="album">
        <img src="${roster}" alt="${alt}" />
        <img src="${bwd2}" alt="${alt}" />
        <img src="${drunken}" alt="${alt}" />
        <img src="${bwd1}" alt="${alt}" />
        <img src="${gno2}" alt="${alt}" />
        <img src="${gno1}" alt="${alt}" />
      </div>
    </div>`;
  }

  static styles = [
    mixinStyles,
    css`
      .album {
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        max-width: var(--app-width);
        flex-wrap: wrap;
      }
      img {
        display: block;
        margin: 1rem;
        border: 1px solid var(--border);
        border-radius: 8px;
        width: min(800px, 90dvw);
      }
    `,
  ];
}
