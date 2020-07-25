import React from "react";

import {
  Container,
  Social,
  Comment,
  Bytecode,
  Literal
} from "mlite-ui-components";
import "mlite-ui-components/dist/index.css";

const App = () => {
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
    </Container>
  );
};

export default App;
