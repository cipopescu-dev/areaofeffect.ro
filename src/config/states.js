export const AoeStates = [
  {
    path: "/",
    extern: false,
    menuEntry: "Home",
    component: "ro-aoe-home",
  },
  {
    path: "/about",
    extern: false,
    // menuEntry: "About",
    component: "ro-aoe-about",
  },
  {
    path: "/discord",
    extern: false,
    menuEntry: "Discord",
    component: "ro-aoe-discord",
  },
  // {
  //   path: "/stream",
  //   extern: false,
  //   menuEntry: "Stream",
  //   component: "ro-aoe-stream",
  // },
  {
    path: "https://sod.warcraftlogs.com/guild/reports-list/728561",
    extern: true,
    menuEntry: "Logs",
  },
  {
    path: "https://raid-helper.dev/calendar/1197960195532410962",
    extern: true,
    menuEntry: "Calendar",
  },
  {
    path: "*",
    component: "ro-aoe-home",
  },
];
