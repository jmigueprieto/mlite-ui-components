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
          LDC <Literal>"Hello Worldoss!"</Literal>
        </Instruction>
        <Instruction>
          INVOKEVIRTUAL HomePage.publish (Ljava/lang/String;)V
        </Instruction>
      </Bytecode>
      <Social type='twitter' href='https://twitter.mprieto.me' />
      <Social type='github' href='https://github.com/jmigueprieto' />
    </Container>
  )
}

export default App
