import React from "react"

import {
  Page,
  Social,
  Comment,
  Bytecode,
  Instruction,
  Literal
} from "mlite-ui-components"
import "mlite-ui-components/dist/index.css"

const App = () => {
  return (
    <Page>
      <Comment lines={["Aloha", "From Hawaii", "@author Elvis"]} />
      <Bytecode>
        <Instruction>NEW HomePage</Instruction>
        <Instruction>DUP</Instruction>
        <Instruction>INVOKESPECIAL HomePage.&lt;init&gt; ()V</Instruction>
        <Instruction>
          LDC <Literal>"Hello World!"</Literal>
        </Instruction>
        <Instruction>
          INVOKEVIRTUAL HomePage.publish (Ljava/lang/String;)V
        </Instruction>
      </Bytecode>
      <Social type='twitter' href='https://twitter.mprieto.me' />
      <Social type='github' href='https://github.com/jmigueprieto' />
    </Page>
  )
}

export default App
