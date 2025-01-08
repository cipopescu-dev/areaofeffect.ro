import { LitElement, css, html } from "lit";
import mixinStyles from "../styles.js";

export class AoeDiscord extends LitElement {
  static properties = {
    instant_invite: { String },
  };

  constructor() {
    super();
  }

  async firstUpdated() {
    this.instant_invite = await fetch(
      "https://discord.com/api/guilds/1197960195532410962/widget.json"
    )
      .then((r) => r.json())
      .then(({ instant_invite }) => instant_invite);
  }

  render() {
    return html`<div class="page-container">
      ${this.instant_invite
        ? html`<form action="${this.instant_invite}">
            <label>Invite link:</label>
            <input
              type="text"
              id="instant_invite"
              name="instant_invite"
              readonly
              size="${this.instant_invite.length}"
              value="${this.instant_invite}"
            />
            <input type="submit" value="Join AoE!" />
          </form>`
        : ""}
    </div>`;
  }

  static styles = [
    mixinStyles,
    css`
      form {
        display: block;
        margin: 1rem auto;
        text-align: center;
      }
      form > * {
        line-height: 2rem;
        font-size: 1rem;
        border-radius: 8px;
        padding: 0 1rem;
      }
      [type="submit"] {
        font-weight: bolder;
        position: relative;
        color: inherit;
        background-color: var(--acc2);
        border: 1px solid var(--border);
        margin: 0 2rem;
      }
      [type="submit"]:hover {
        scale: 1.1;
        color: var(--acc3);
        cursor: pointer;
      }
      [type="text"] {
        border: 1px solid var(--border);
      }
      label {
        font-weight: bolder;
      }
    `,
  ];
}
