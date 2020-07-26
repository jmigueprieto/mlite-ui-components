import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, text } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import { Container, Autocomplete } from "..";

storiesOf("Autocomplete", module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add("Autocomplete", () => (
    <Container>
      <Autocomplete
        items={[
          "C",
          "C++",
          "C#",
          "Java",
          "JavaScript",
          "Kotlin",
          "Groovy",
          "Scala",
          "TypeScript",
          "Go",
          "Visual Basic",
          "Fortran",
          "Python",
          "R",
          "SQL"
        ].sort()}
      ></Autocomplete>
      <div>Some Element after the Autocomplete</div>
    </Container>
  ));
