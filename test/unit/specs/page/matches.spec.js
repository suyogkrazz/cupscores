import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Page from "~/pages/matches.vue";

import matches from "../../../data/matches.js";
const localVue = createLocalVue();

localVue.use(Vuex);
const $t = () => {};
describe(`all matches page`, () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      actions: {
        getCurrentMatch: jest.fn()
      },
      state: {
        matches: matches
      }
    });
  });

  it(`should mock store correctly`, () => {
    const wrapper = shallowMount(Page, { mocks: { $t }, store, localVue });
    expect(wrapper.vm.matches).toEqual(matches);
    expect(wrapper.vm.filteredMatches.length).toEqual(64);
  });
  it(`should change getter when filter is set correctly`, () => {
    const wrapper = shallowMount(Page, { mocks: { $t }, store, localVue });
    wrapper.vm.search = "rus";
    expect(wrapper.vm.filteredMatches.length).toEqual(3);
  });
});
