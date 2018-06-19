import axios from "~/plugins/axios.js";

export const state = () => ({
  people: [],
  locales: ["en", "np"],
  locale: "en",
  current: []
});

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale;
    }
  },
  setCurrentMatch(state, match) {
    state.current = match;
  }
};

export const actions = {
  async getCurrentMatch({ commit, store }, id) {
    let { data } = await axios.get(`/matches/`);
    commit("setCurrentMatch", data);
  },
  async nuxtServerInit({ commit }, { app }) {
    let { data } = await axios.get(`/matches/`);
    commit("setCurrentMatch", data);
  }
};
