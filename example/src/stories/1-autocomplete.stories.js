import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, array } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";

import "@jmigueprieto/mlite-ui-components/dist/index.css";
import { Container, Autocomplete } from "@jmigueprieto/mlite-ui-components";

storiesOf("Autocomplete", module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add("Autocomplete", () => {
    const languages = [
      "Ada",
      "C",
      "C++",
      "C#",
      "Clojure",
      "Erlang",
      "Basic",
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
      "SQL",
      "Bash",
      "Lua",
      "Rust",
      "PHP",
      "Swift",
      "Ruby",
      "Lisp"
    ].sort();
    return (
      <Container>
        <div style={{ padding: "1rem" }}>
          <div style={{ marginBottom: "1rem" }}>
            What's your favorite language?
          </div>
          <Autocomplete
            items={array("items", languages)}
            placeholder={text("placeholder", "Search")}
          ></Autocomplete>
        </div>
      </Container>
    );
  });
