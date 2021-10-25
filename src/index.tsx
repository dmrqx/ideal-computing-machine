import { render } from 'react-dom'

import { App } from './app'
import './css/index.css'
;(function renderApp (appRootSelector = '#app') {
  const bodyElement = document.body
  const appRootElement = bodyElement.querySelector(appRootSelector)

  render(<App />, appRootElement)
})()
