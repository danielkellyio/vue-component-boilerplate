import { mount } from "@vue/test-utils";
import { VueComponent } from "../../src/index";

describe("Vue Component", () => {
  test('prints hello world', ()=>{
    const wrapper = mount(VueComponent)
    expect(wrapper.html()).toContain("Hello World")
  })
});
