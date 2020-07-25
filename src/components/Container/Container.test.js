import React from "react"
import Container from "./Container"
import { configure, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

configure({ adapter: new Adapter() })

describe("Container", () => {
  it("to be truthy", () => {
    expect(Container).toBeTruthy()
  })

  it("to contain the child text", () => {
    const wrapper = shallow(<Container>Lorem Ipsum</Container>)
    expect(wrapper.text()).toContain("Lorem Ipsum")
  })
})
