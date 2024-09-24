import { AoeAbout } from "./about/about.component.js";
import { AoeDiscord } from "./discord/discord.component.js";
import { AoeHome } from "./home/home.component.js";
import { AoeStream } from "./stream/stream.component.js";
window.customElements.define("ro-aoe-home", AoeHome);
window.customElements.define("ro-aoe-discord", AoeDiscord);
window.customElements.define("ro-aoe-stream", AoeStream);
window.customElements.define("ro-aoe-about", AoeAbout);
