import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Page from "~/pages/_lang/matches.vue";

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
  });
});
