import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Links } from '../components'
import { ProductsList, ProductsInsert } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <Router>
      <Links />
      <Switch>
        <Route path="/products/list" exact component={ProductsList} />
        <Route path="/products/create" exact component={ProductsInsert} />
      </Switch>
    </Router>
  )
}

export default App