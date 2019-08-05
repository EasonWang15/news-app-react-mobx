import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import store from "./store"
import RouterMap from './router'
import './App.scss'

class App extends Component {
  render() {
    const name = window.localStorage.getItem("name")
    name && store.login(name)
    return (
      <Provider store={store}>
        <RouterMap />
      </Provider>
    )
  }
}

export default App