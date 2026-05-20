import { LitElement, css, html } from "lit";
import { Router } from "simple-wc-router";
import logo from "./assets/logo-a.png";
import "./components/NavMenu.component.js";

export class App extends Router(LitElement) {
  static get routes() {
    return [
      {
        path: "/",
        component: "aoe-home",
        import: () => import("./pages/Home.component.js"),
      },
      {
        path: "/discord",
        component: "aoe-discord",
        import: () => import("./pages/Discord.component.js"),
      },
      {
        path: "/logs",
        component: "aoe-redirect",
        render: () =>
          html` <aoe-redirect
            .route="${"https://fresh.warcraftlogs.com/guild/reports-list/801529"}"
          ></aoe-redirect>`,
        import: () => import("./components/Redirect.component.js"),
      },
      {
        path: "/logs-sod",
        component: "aoe-redirect",
        render: () =>
          html` <aoe-redirect
            .route="${"https://sod.warcraftlogs.com/guild/reports-list/728561"}"
          ></aoe-redirect>`,
        import: () => import("./components/Redirect.component.js"),
      },
      {
        path: "/calendar",
        component: "aoe-redirect",
        render: () =>
          html` <aoe-redirect
            .route="${"https://raid-helper.dev/calendar/1197960195532410962/XWSuOrsKGZjNANdZcGoo"}"
          ></aoe-redirect>`,
        import: () => import("./components/Redirect.component.js"),
      },
      {
        path: "*",
        component: "aoe-notfound",
        import: () => import("./pages/NotFound.component.js"),
      },
    ];
  }

  static get properties() {
    return { instant_invite: { String } };
  }

  constructor() {
    super();
    this.title = "World of Warcraft Horde Guild";
    this.subtitle = "Anniversary realms - Spineshatter EU";
  }

  render() {
    return html`
      <img src="${logo}" alt="Area of Effect logo" />
      <main>
        <div class="top">
          <div class="title">${this.title}</div>
          <div class="stitle">${this.subtitle}</div>
          <aoe-navmenu></aoe-navmenu>
          <hr />
        </div>
        ${this.routeElement}
      </main>
    `;
  }

  static get styles() {
    return css`
      main {
        text-align: center;
      }
      .title,
      .stitle {
        text-shadow: rgba(0, 0, 0, 0.3) 3px 3px;
      }
      .title {
        color: crimson;
        font-size: 3rem;
      }
      .stitle {
        color: gray;
        font-size: 1.5rem;
      }
      img {
        width: 100%;
      }
      @media only screen and (min-width: 320px) {
        :host {
          display: grid;
          grid-template-columns: 1fr;
        }
        img {
          width: 100%;
          height: auto;
        }
      }
      @media only screen and (min-width: 960px) {
        :host {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr;
        }

        img {
          width: min(100dvh, 50dvw);
          margin: 0 auto;
        }

        main {
          padding: 4rem;
          height: calc(100dvh - 8rem);
          overflow: scroll;
        }
      }
    `;
  }
}

window.customElements.define("aoe-app", App);
