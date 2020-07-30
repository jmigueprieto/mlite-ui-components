import React from "react";

import "@jmigueprieto/mlite-ui-components/dist/index.css";
import {
  Container,
  Social,
  Comment,
  Bytecode,
  Literal
} from "@jmigueprieto/mlite-ui-components";

const App = () => {
  return (
    <Container>
      <Comment style={{ paddingTop: "1rem" }}>
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
      <Social type="contact" href="mailto:hello@mprieto.me" target="_blank" />
      <Social
        type="facebook"
        href="https://facebook.com/jmigueprieto"
        target="_blank"
      />
      <Social
        type="github"
        href="https://github.com/jmigueprieto"
        target="_blank"
      />
      <Social
        type="instagram"
        href="https://instagram.com/jmigueprieto"
        target="_blank"
      />
      <Social
        type="linkedin"
        href="https://linkedin.com/in/jmigueprieto"
        target="_blank"
      />
      <Social
        type="twitter"
        href="https://twitter.com/miguelprieto"
        target="_blank"
      />
    </Container>
  );
};

export default App;
