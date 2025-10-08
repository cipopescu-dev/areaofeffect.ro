import { LitElement, css, html } from "lit";
import group from "../assets/group.jpg";

export class Discord extends LitElement {
  static properties = {
    instant_invite: { String },
    error: { Boolean },
  };

  async firstUpdated() {
    this.instant_invite = await fetch(
      "https://discord.com/api/guilds/1197960195532410962/widget.json"
    )
      .then((r) => r.json())
      .then(({ instant_invite }) => instant_invite)
      .catch(() => {
        this.error = true;
      });
  }
  render() {
    return !this.error
      ? html`<h2>💬 Te așteptăm pe canalul nostru de discord:</h2>
          ${this.instant_invite
            ? html` <p>
                👉
                <a href="${this.instant_invite}">${this.instant_invite}</a> 👈
              </p>`
            : "⏳ Se încarcă..."}
          <img src="${group}" alt="group" />`
      : html`<h2>💬 Hmm... ceva nu a mers bine</h2>`;
  }

  static styles = [
    css`
      :host {
        padding: 8px;
        font-family: "system-ui";
        color: cornsilk;
        display: block;
        min-height: 500px;
      }
      img {
        width: 100%;
        border-radius: 8px;
        border: 1px solid grey;
      }
    `,
  ];
}

window.customElements.define("aoe-discord", Discord);
