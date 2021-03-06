import axios from "~/plugins/axios.js";

export const state = () => ({
  matches: [],
  locales: ["en", "np"],
  locale: "en",
  current: [],
  groups: []
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
  setAllGroups(state, groups) {
    state.groups = groups;
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
  // async getCurrentMatch({ commit, store }) {
  //   try {
  //     let { data } = await axios.get(`/matches/`);
  //     // faking live data
  //     commit("setCurrentMatch", data.slice(-data.length, 1));
  //   } catch (e) {}
  // },
  async getAllMatch({ commit, store }) {
    try {
      let { data } = await axios.get(`/matches/`);
      commit("setAllMatch", data);
    } catch (e) {}
  },
  async getAllGroups({ commit, store }) {
    try {
      let { data } = await axios.get(`/teams/group_results`);
      commit("setAllGroups", data);
    } catch (e) {}
  },
  async getCurrentMatch({ commit, store }) {
    let { data } = await axios.get(`/matches/current`);
    commit("setCurrentMatch", data);
  },
  async nuxtServerInit({ commit, dispatch }, { app }) {
    try {
      let { data } = await axios.get(`/matches/current`);
      commit("setCurrentMatch", data);
    } catch (e) {}
  }
};
