import React from "react"

import {
  Container,
  Social,
  Comment,
  Bytecode,
  Instruction,
  Literal
} from "mlite-ui-components"
import "mlite-ui-components/dist/index.css"

const App = () => {
  return (
    <Container>
      <Comment lines={["Aloha", "From Hawaii", "@author It's Elvis"]} />
      <Bytecode>
        <Instruction>NEW HomePage</Instruction>
        <Instruction>DUP</Instruction>
        <Instruction>INVOKESPECIAL HomePage.&lt;init&gt; ()V</Instruction>
        <Instruction>
          LDC <Literal>"¡Aló Mundillo!"</Literal>
        </Instruction>
        <Instruction>
          INVOKEVIRTUAL HomePage.publish (Ljava/lang/String;)V
        </Instruction>
      </Bytecode>
      <Social type="twitter" href="https://twitter.com/jmigueprieto" />
      <Social
        type="github"
        href="https://github.com/jmigueprieto"
        target="_blank"
      />
    </Container>
  )
}

export default App
