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

export const getters = {
  getFutureGames(state) {
    return state.matches.filter(item => item.status === "future");
  }
};

export const actions = {
  async getCurrentMatch({ commit, store }) {
    try {
      let { data } = await axios.get(`/matches/`);
      // faking live data
      commit("setCurrentMatch", data.slice(-data.length, 1));
    } catch (e) {}
  },
  async getAllMatch({ commit, store }) {
    try {
      let { data } = await axios.get(`/matches/`);
      commit("setAllMatch", data);
    } catch (e) {}
  },
  async getAllTeams({ commit, store }) {
    try {
      let { data } = await axios.get(`/matches/`);
      commit("setAllMatch", data);
    } catch (e) {}
  },
  async nuxtServerInit({ commit }, { app }) {
    try {
      let { data } = await axios.get(`/matches/`);
      // faking live data
      commit("setCurrentMatch", data.slice(-data.length, 1));
      commit("setAllMatch", data);
    } catch (e) {}
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
