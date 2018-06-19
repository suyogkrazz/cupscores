export const state = () => ({
  people: [],
  locales: ["en", "np"],
  locale: "en"
});

export const mutations = {
  setPeople(state, people) {
    state.people = people;
  },
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale;
    }
  }
};

export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    const people = await app.$axios.$get("./random-data.json");
    commit("setPeople", people.slice(0, 10));
  }
};
