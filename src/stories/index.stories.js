import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, array, select, text } from "@storybook/addon-knobs"
// import { withStorySource } from "@storybook/addon-storysource"
import { Container, Social, Comment } from "../"

storiesOf("Components", module)
  .addDecorator(withKnobs)
  // .addDecorator(withStorySource)
  .add("Container", () => (
    <Container>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
      tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi
      consequat. Quis aute iure reprehenderit in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Container>
  ))
  .add("Social", () => (
    <Container>
      <Social
        type={select(
          "type",
          {
            contact: "contact",
            facebook: "facebook",
            github: "github",
            instagram: "instagram",
            linkedin: "linkedin",
            twitter: "twitter"
          },
          "contact"
        )}
        href={text("href", "https://mprieto.me")}
        target={text("target", "_blank")}
      />
    </Container>
  ))
  .add("Comment", () => (
    <Container>
      <Comment
        lines={array("Lines within the comment", [
          "This is a function",
          "You can call it",
          "And it will return a value"
        ])}
      />
    </Container>
  ))
