// ===========================================================================
/// <summary>
/// HelloWorld.spec.js
/// vue-webapp
/// created by Mehrdad Soleimanimajd on 06.06.2023
/// </summary>
/// <created>ʆϒʅ, 06.06.2023</created>
/// <changed>ʆϒʅ, 03.07.2023</changed>
// ===========================================================================

import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import HelloWorld from "../HelloWorld.vue";

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(HelloWorld, { props: { msg: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});
