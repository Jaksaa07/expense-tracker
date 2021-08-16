import React from 'react'
import ReactDOM from 'react-dom'
import { SpeechProvider } from '@speechly/react-client'

import App from './App'
import './index.css'
import { Provider } from './context/context'

ReactDOM.render(
  <SpeechProvider appId="c8fac48b-0201-4ec5-a312-417399a973ba" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root')
)
