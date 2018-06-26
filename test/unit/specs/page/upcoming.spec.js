import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Page from "~/pages/upcoming.vue";

import matches from "../../../data/matches.js";
const localVue = createLocalVue();

localVue.use(Vuex);
const $t = () => {};
const futureMatches = matches.filter(item => item.status === "future");
describe(`all matches page`, () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      actions: {
        getCurrentMatch: jest.fn()
      },
      getters: {
        getFutureGames: () => futureMatches
      },
      state: {
        matches: matches
      }
    });
  });

  it(`should mock store correctly`, () => {
    const wrapper = shallowMount(Page, { mocks: { $t }, store, localVue });
    expect(wrapper.vm.getFutureGames).toEqual(futureMatches);
  });
  it(`should change getter when filter is set correctly`, () => {
    const wrapper = shallowMount(Page, { mocks: { $t }, store, localVue });
    wrapper.vm.search = "rus";
    expect(wrapper.vm.upcomingMatches.length).toEqual(1);
  });
});
