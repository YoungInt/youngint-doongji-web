import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'

ReactDOM.render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./App.js', () => {
    import('./App.js').then(() => render(App))
  })
}
