import React from "react"
import { Page } from ".."
import { configure, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

configure({ adapter: new Adapter() })

describe("Page", () => {
  it("to be truthy", () => {
    expect(Page).toBeTruthy()
  })

  it("to contain the child text", () => {
    const wrapper = shallow(<Page>Lorem Ipsum</Page>)
    expect(wrapper.text()).toContain("Lorem Ipsum")
  })
})
