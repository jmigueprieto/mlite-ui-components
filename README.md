# mlite-ui-components

> UI Component Library for my mprieto.me

[![NPM](https://img.shields.io/npm/v/mlite-ui-components.svg)](https://www.npmjs.com/package/mlite-ui-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save mlite-ui-components
```

## Usage

```jsx
import React from "react"

import { Page, Social } from "mlite-ui-components"
import "mlite-ui-components/dist/index.css"

const App = () => {
  return (
    <Page>
      <Comment lines={["Aloha", "From Hawaii", "@author Elvis"]} />
      <Social type='twitter' href='https://twitter.mprieto.me' modifier='' />
    </Page>
  )
}

export default App
```

## License

MIT © [jmigueprieto](https://github.com/jmigueprieto)
