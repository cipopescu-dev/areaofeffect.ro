import { LitElement, css, html } from "lit";
import { RouteMixin } from "simple-wc-router";

export class NavMenu extends RouteMixin(LitElement) {
  static properties = {
    route: { String },
  };

  constructor() {
    super();
    this.route = location.pathname;
  }

  go(to) {
    this.route = to;
    this.navigate();
  }

  render() {
    return html` <span class="fire">🔥</span>
      <button
        ?active-route=${this.route === "/"}
        @click="${() => this.go("/")}"
      >
        Home
      </button>
      <button
        @click="${() =>
          this.go("https://fresh.warcraftlogs.com/guild/reports-list/801529")}"
      >
        Logs
      </button>
      <button
        ?active-route=${this.route === "/discord"}
        @click="${() => this.go("/discord")}"
      >
        Discord
      </button>

      <button
        @click="${() =>
          this.go("https://raid-helper.dev/calendar/1197960195532410962")}"
      >
        Calendar</button
      ><span class="fire">🔥</span>`;
  }

  static styles = [
    css`
      button {
        background: none;
        border: none;
        font-weight: bold;
        color: goldenrod;
        font-size: 1.5rem;
        margin: 0 0.5rem;

        text-shadow: rgba(0, 0, 0, 0.3) 3px 3px;
        font-family: "New Rocker", system-ui;
        font-weight: 400;
        font-style: normal;
      }
      span.fire {
        font-size: 2rem;
      }

      @media only screen and (max-width: 320px) {
        button {
          font-size: 1rem;
        }
        span.fire {
          font-size: 1.5rem;
        }
      }

      button:hover {
        transform: scale(1.05);
        color: gold;
        cursor: pointer;
      }
      button:active {
        transform: translateY(1px);
      }

      button[active-route] {
        color: greenyellow;
      }
    `,
  ];
}

window.customElements.define("aoe-navmenu", NavMenu);
