import { LitElement, css, html } from "lit";

export class Home extends LitElement {
  static properties = {};

  render() {
    return html`
      <h2>🇷🇴 Guilda noastră 100% românească</h2>
      <ul>
        <li>
          Vrem mai multi jucători activi gata pentru orice ne mai aruncă
          Blizzard în față 💥🐲
        </li>
        <li>
          Fiind o guilda semi-casual cu note hardcore 🔥, raidăm săptămânal și
          facem clear-uri eficiente
          <a href="https://sod.warcraftlogs.com/guild/reports-list/728561"
            >încă din SoD</a
          >
          Phase1, pentru că știm că loot-ul nu așteaptă! 😎
        </li>
        <li>
          Recrutăm orice clasă/spec. Nu contează cu ce joci, contează să vrei să
          devii mai bun 🤲
        </li>
      </ul>
      <hr />
      <h2>📅 Zile de raid</h2>
      <ul>
        <li>Main-raid: Miercurea 20:30 ST</li>
        <li>*Off-raid: Duminica 20:30 ST</li>
        <li>Ad-hoc raids/events: random, la cerere</li>
        <li>* tot ce nu tine de current tier</li>
      </ul>
      <hr />
      <h2>💰 Distribuire loot</h2>
      <ul>
        <li>
          ⚖️ Simplu și corect: avem loot council care prioritizează cei mai
          activi și prezenți jucători. Vrem ca totul să fie cât mai fair, pentru
          ca echipa să strălucească! 💎
        </li>
        <li>
          🐣 Trial Raider = persoana care își face debutul în raidurile noastre,
          adică primele două participări într-un guild run
        </li>
        <li>
          Initial se geareaza tankul si 1 healer - cineva trebuie să țină echipa
          în picioare și să ducă damage-ul! 🛡️
        </li>
      </ul>
      <hr />
      <h2>🪖 PVP</h2>
      <p>
        Când vine vorba de PVP, știm cum suntem noi, românii: dai într-unul, ne
        strângem toți! 😎 Facem premades pentru honor grind, ne distrăm prin STV
        și, desigur, gankăm ca niște profesioniști
      </p>
      <hr />
      <h2>📞 Contact</h2>
      <p>
        Vrei să afli mai multe? Dă un /w Garthmage sau Mookeeper și hai să
        povestim! Te așteptăm cu entuziasm în echipa noastră! 🚀
      </p>
    `;
  }

  static styles = [
    css`
      :host {
        text-align: start;
        padding: 8px;
        font-family: "system-ui";
        color: cornsilk;
        display: block;
      }
    `,
  ];
}

window.customElements.define("aoe-home", Home);
