import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Page from "~/pages/_lang/index.vue";
import matches from "../../../data/matches.js";
const localVue = createLocalVue();
localVue.use(Vuex);
const $t = () => {};
describe(`Page homepage`, () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      actions: {
        getCurrentMatch: jest.fn()
      },
      state: {
        current: matches.slice(-matches.length, 1)
      }
    });
  });

  it(`should mock store correctly`, () => {
    const wrapper = shallowMount(Page, { mocks: { $t }, store, localVue });
    expect(wrapper.vm.current).toEqual(matches.slice(-matches.length, 1));
  });
});
