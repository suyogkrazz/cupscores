import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Page from "~/pages/groups.vue";
import groups from "../../../data/groups.js";
const localVue = createLocalVue();
localVue.use(Vuex);
const $t = () => {};
describe(`all groups page`, () => {
  let store;
  beforeEach(() => {
    store = new Vuex.Store({
      actions: {
        getAllGroups: jest.fn()
      },
      state: {
        groups: groups
      }
    });
  });
  it(`should mock store correctly`, () => {
    const wrapper = shallowMount(Page, { mocks: { $t }, store, localVue });
    expect(wrapper.vm.groups).toEqual(groups);
  });
});
