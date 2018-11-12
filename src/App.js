import React from 'react'
// import PropTypes from 'prop-types'
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Provider } from 'react-redux'
import history from "./history"
import Login from "./routes/Login"
import Home from "./routes/Home"

import { Router, Route } from "react-router-dom"
// import ThemeSettings from 'theme'

// const theme = createMuiTheme(ThemeSettings)

const App = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
      </div>
    </Router>
  </Provider>
)


export default App
