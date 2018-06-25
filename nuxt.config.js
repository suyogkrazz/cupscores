const { I18N } = require("./config");
const parseArgs = require("minimist");
const path = require("path");
const argv = parseArgs(process.argv.slice(2), {
  alias: {
    H: "hostname",
    p: "port"
  },
  string: ["H"],
  unknown: parameter => false
});

const port =
  argv.port ||
  process.env.PORT ||
  process.env.npm_package_config_nuxt_port ||
  "3000";
const host =
  argv.hostname ||
  process.env.HOST ||
  process.env.npm_package_config_nuxt_host ||
  "localhost";
module.exports = {
  env: {
    baseUrl: process.env.BASE_URL || `http://${host}:${port}`
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#fc7b00" },
  loadingIndicator: {
    name: "circle",
    color: "#3B8070",
    background: "white"
  },
  plugins: ["./plugins/vuetify.js", "./plugins/i18n.js"],
  head: {
    title: "Scores 2018",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "World Cup 2018"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      },
      {
        rel: "stylesheet",
        href: "https://unpkg.com/vuetify/dist/vuetify.min.css"
      }
    ]
  },

  /*
  ** Build configuration
  */
  css: [
    "~/assets/css/main.css",
    "~/node_modules/material-icons/iconfont/material-icons.css",
    {
      src: path.join(__dirname, "/assets/css/app.styl"),
      lang: "styl"
    }
  ],
  build: {},
  modules: ["@nuxtjs/axios", "~/modules/typescript.js", ["nuxt-i18n", I18N]],
  axios: {}
  // generate: {
  //   routes: ["/", "/matches", "/np", "/np/matches"]
  // }
};
