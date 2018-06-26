import { shallow } from "@vue/test-utils";
import { createRenderer } from "vue-server-renderer";
import Component from "~/components/Stats.vue";
import matches from "../../../data/matches.js";

const $t = () => {};
describe(`Component Logo`, () => {
  it("renders to a snapshot", () => {
    const renderer = createRenderer();
    const match = matches[0];
    const wrapper = shallow(Component, {
      propsData: {
        match
      },
      mocks: { $t }
    });
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err);
      expect(str).toMatchSnapshot();
    });
  });
});
