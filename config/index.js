const en = require("../locales/en.json");
const np = require("../locales/np.json");

const I18N = {
  locales: [
    {
      code: "en",
      iso: "en-US",
      name: "English"
    },
    {
      code: "np",
      iso: "np-NP",
      name: "Nepali"
    }
  ],
  defaultLocale: "en",
  parsePages: false,
  pages: {
    matches: {
      np: "/खेलहरू",
      en: "/matches"
    },
    upcoming: {
      np: "/आगामी",
      en: "/upcoming"
    }
  },
  vueI18n: {
    fallbackLocale: "en",
    messages: { en, np }
  }
};

module.exports = {
  I18N
};
