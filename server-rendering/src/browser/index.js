import React from 'react'
import { hydrate } from 'react-dom'
import App from '../shared/App'
import { BrowserRouter } from 'react-router-dom'

hydrate(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementByID('app')
)


/*

This will adding event listeners and interactivity


*/
