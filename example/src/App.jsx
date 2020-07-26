import React from "react";

import {
  Container,
  Social,
  Comment,
  Bytecode,
  Literal,
  Autocomplete
} from "mlite-ui-components";
import "mlite-ui-components/dist/index.css";

const App = () => {
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
      <Comment>
        Aloha <br />
        From Hawaii! <br />
        @author It's Elvis <br />
      </Comment>
      <Bytecode>
        NEW HomePage <br />
        DUP <br />
        INVOKESPECIAL HomePage.&lt;init&gt; ()V <br />
        LDC <Literal>"¡Aló Mundillo!"</Literal> <br />
        INVOKEVIRTUAL HomePage.publish (Ljava/lang/String;)V <br />
      </Bytecode>
      <Social type="twitter" href="https://twitter.com/jmigueprieto" />
      <Social
        type="github"
        href="https://github.com/jmigueprieto"
        target="_blank"
      />
      <Autocomplete
        items={languages}
        placeholder="Search a Language"
      ></Autocomplete>
    </Container>
  );
};

export default App;
