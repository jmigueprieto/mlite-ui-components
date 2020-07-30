import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, text } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";

import "@jmigueprieto/mlite-ui-components/dist/index.css";
import { Container, Social, Comment } from "@jmigueprieto/mlite-ui-components";

storiesOf("HomePage Components", module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
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
      <Comment>
        This is a function
        <br />
        And it will return a value <br />
        You can call it <br />
      </Comment>
    </Container>
  ));
