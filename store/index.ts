import axios from "~/plugins/axios.js";

export const state = () => ({
  matches: [],
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
  setAllMatch(state, matches) {
    state.matches = matches;
  },
  setCurrentMatch(state, match) {
    state.current = match;
  }
};

export const actions = {
  async getCurrentMatch({ commit, store }) {
    let { data } = await axios.get(`/matches/`);
    commit("setCurrentMatch", data.slice(-data.length, 1));
  },
  async getAllMatch({ commit, store }) {
    let { data } = await axios.get(`/matches/`);
    commit("setAllMatch", data);
  },
  async nuxtServerInit({ commit }, { app }) {
    let { data } = await axios.get(`/matches/`);
    commit("setCurrentMatch", data.slice(-data.length, 1));
  }
  // async getCurrentMatch({ commit, store }, id) {
  //   let { data } = await axios.get(`/matches/current`);
  //   commit("setCurrentMatch", data);
  // },
  // async nuxtServerInit({ commit }, { app }) {
  //   let { data } = await axios.get(`/matches/current`);
  //   commit("setCurrentMatch", data);
  // }
};
