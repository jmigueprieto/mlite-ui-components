import React from 'react'

import { Page, Social } from 'mlite-ui-components'
import 'mlite-ui-components/dist/index.css'

const App = () => {
  return (
    <Page>
      <div>Hello UI Component Library!</div>
      <Social type='twitter' href='https://twitter.mprieto.me' />
    </Page>
  )
}

export default App
